import * as fs from 'fs';
import jsYaml from 'js-yaml';

export const GET = async (request: Request): Promise<Response> => {
    try{
        const fileContents = fs.readFileSync('public/data.yaml', 'utf8');
        const data = jsYaml.load(fileContents) as {quotes: string[]};
    
        const randomIndex = Math.floor(Math.random() * data.quotes.length);
        const randomQuote = data.quotes[randomIndex];
    
        return new Response(
            JSON.stringify({
                quote: randomQuote
            }),
            {
                status: 200,
            }
        )
    }catch(error) {
        return new Response(
            JSON.stringify({
                quote: "Server Error"
            }),
            {
                status: 500,
            }
        )
    }
}
