import fs from "fs/promises";
import satori from "satori";
import { html } from "satori-html";
import sharp from "sharp";
import type { APIRoute } from "astro";

export const GET: APIRoute = async function GET({ url, request }) {
  const [totalMoney, numOfMonths, offeringPrice] = url.searchParams
    .get("v")
    ?.split("-")
    .map((v) => parseInt(v)) || [50000, 3, 50];
  const interRegular = await fs.readFile("./public/fonts/Inter-Regular.ttf");
  const interExtraBold = await fs.readFile(
    "./public/fonts/Inter-ExtraBold.ttf"
  );
  const interLight = await fs.readFile("./public/fonts/Inter-Light.ttf");
  const options = {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Inter",
        data: interRegular,
        weight: 400,
        style: "normal",
      },
      {
        name: "Inter",
        data: interExtraBold,
        weight: 800,
        style: "normal",
      },
      {
        name: "Inter",
        data: interLight,
        weight: 300,
        style: "normal",
      },
    ],
  };

  // const offeringPriceAdjusted = offeringPrice.toLocaleString('en-US', {
  //   style: 'currency',
  //   currency: 'USD',
  //   minimumFractionDigits: 0,
  // });
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  const markup = html`<div
    style="height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: rgb(255, 252, 240); ">
    <div
      style="display: flex; flex-direction: row; align-items: center; justify-content: space-around; width: 80%;">
      <img
        src="https://res.cloudinary.com/jsjoeio/image/upload/v1698812392/logopng_wvhtza.png"
        width="300"
        height="300" />
      <div
        style="display: flex; flex-direction: column; font-size: 64px; font-weight: 800; font-family: Noto;">
        <div>Make ${formatter.format(totalMoney)}</div>
        <div>in ${numOfMonths.toLocaleString()} months selling</div>
        <div>a ${formatter.format(offeringPrice)} product.</div>
      </div>
    </div>
    <div
      style="font-size: 28px; font-weight: 300; margin-top: 24px; align-self: flex-end; margin-right: 60px;">
      howmuchtomake.org
    </div>
  </div>`;

  const svg = await satori(
    // @ts-ignore
    markup,
    options
  );
  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      "Cache-Control": "max-age=31536000, immutable",
      "Content-Type": "image/png",
    },
  });
};
