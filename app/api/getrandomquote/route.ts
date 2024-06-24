import * as fs from 'fs';
import jsYaml from 'js-yaml';

export const GET = async (request: Request): Promise<Response> => {
    try {

        const fileContents = fs.readFileSync('public/data.yaml', 'utf8');
        const data = jsYaml.load(fileContents) as { quotes: string[] };

        const randomIndex = Math.floor(Math.random() * data.quotes.length);
        const randomQuote = data.quotes[randomIndex];

        return new Response(
            JSON.stringify({
                quote: randomQuote
            }),
            {
                status: 200,
                headers: {
                    'Cache-Control': 'public, s-maxage=1',
                    'CDN-Cache-Control': 'public, s-maxage=1',
                    'Vercel-CDN-Cache-Control': 'public, s-maxage=1',
                }
            }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({
                quote: `SERVER ERROR:: ${error}`
            }),
            {
                status: 500,
                headers: {
                    'Cache-Control': 'public, s-maxage=1',
                    'CDN-Cache-Control': 'public, s-maxage=1',
                    'Vercel-CDN-Cache-Control': 'public, s-maxage=1',
                }
            }
        );
    }
}

// export const POST = async (request: Request): Promise<Response> => {
//     try {
//         const requestBody = await request.json();
//         const { timestamp } = requestBody;

//         if (!timestamp) {
//             return new Response(
//                 JSON.stringify({
//                     error: 'Timestamp is required'
//                 }),
//                 {
//                     status: 400,
//                     headers: {
//                         'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
//                         'Content-Type': 'application/json'
//                     }
//                 }
//             );
//         }

//         const fileContents = fs.readFileSync('public/data.yaml', 'utf8');
//         const data = jsYaml.load(fileContents) as { quotes: string[] };

//         const randomIndex = Math.floor(Math.random() * data.quotes.length);
//         const randomQuote = data.quotes[randomIndex];

//         return new Response(
//             JSON.stringify({
//                 timestamp: timestamp,
//                 quote: randomQuote
//             }),
//             {
//                 status: 200,
//                 headers: {
//                     'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
//                     'Content-Type': 'application/json'
//                 }
//             }
//         );
//     } catch (error) {
//         return new Response(
//             JSON.stringify({
//                 error: "Server Error"
//             }),
//             {
//                 status: 500,
//                 headers: {
//                     'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
//                     'Content-Type': 'application/json'
//                 }
//             }
//         );
//     }
// }
