import fs from "fs/promises";
import satori from "satori";
import sharp from "sharp";
import type { APIRoute } from 'astro';

export const get: APIRoute = async function get({ params, request }) {
  const robotoData = await fs.readFile("./public/fonts/Roboto-Regular.ttf");

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          fontSize: 32,
          fontWeight: 600,
        },
        children: [
          {
            type: 'svg',
            props: {
              width: '75',
              viewBox: '0 0 75 65',
              fill: '#000',
              style: { margin: '0 75px' },
              children: {
                type: 'path',
                props: {
                  d: 'M37.59.25l36.95 64H.64l36.95-64',
                },
              },
            },
          },
          {
            type: 'div',
            props: {
              style: { marginTop: 40 },
              children: 'Goodbye, World',
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Roboto",
          data: robotoData,
          weight: "normal",
          style: "normal",
        },
      ],
    }
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
    },
  });
}