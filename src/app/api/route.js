import { NextResponse } from "next/server";

export const listaDeLols = [
    {
        id: 1,
        produto: "LOL Surprise 7.07 Queen Bee",
        serie: "70.7",
        foto: "https://img.br.my-best.com/product_images/fa2122f949010bd260ab21ab18807951.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=240&h=240&fit=fill&fill=solid&fill-color=FFFFFF&s=d7e3e59a2b347ab04c5458605079faff",
        preco: 269.00
    },
    {
        id: 2,
        produto: "LOL Hair Goals",
        serie: "Hair Goals",
        foto: "https://img.br.my-best.com/product_images/40d19400e05408817aa8451c815bbe08.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=240&h=240&fit=fill&fill=solid&fill-color=FFFFFF&s=ddc8eb35661bfb75d88485ad807bb4d9",
        preco: 134.99
    },
    {
        id: 3,
        produto: "LOL Surprise Bigger Surprise",
        serie: "Variada",
        foto: "https://img.br.my-best.com/product_images/f3bf8ec828513239bcae9f4a569e329b.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=240&h=240&fit=fill&fill=solid&fill-color=FFFFFF&s=3fc483b4cd81766f4ac5faa6f504c555",
        preco: 410.91
    },
    {
        id: 4,
        produto: "LOL Color Change LIL Sisters",
        serie: "LIL Sisters",
        foto: "https://img.br.my-best.com/product_images/05a65421c1f71c0698c9a3aa3e80ffba.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=240&h=240&fit=fill&fill=solid&fill-color=FFFFFF&s=9ec1f0d718323dcfc4a21751b3b757b7",
        preco: 65.24
    },
    {
        id: 5,
        produto: "LOL Sparkle Series",
        serie: "Sparkles",
        foto: "https://img.br.my-best.com/product_images/4a6d3b2dff3dd6d396fedb672f7eea1a.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=240&h=240&fit=fill&fill=solid&fill-color=FFFFFF&s=7c2dc15bc58d6ecf34540b23b045c4e7",
        preco: 99.97
    },
    {
        id: 6,
        produto: "LOL Surprise Glitter Globe Winter Disco",
        serie: "Glitter Globe",
        foto: "https://img.br.my-best.com/product_images/61d927288848ab50d1e917468232e33d.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=240&h=240&fit=fill&fill=solid&fill-color=FFFFFF&s=0a66a51beb39ed4828a1ebb2eaa13a82",
        preco: 76.95
    },
    {
        id: 7,
        produto: "LOL OMG Lights Series",
        serie: "OMG Lights Series",
        foto: "https://img.br.my-best.com/product_images/e7565ac8e708269b68bad4f265053327.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=240&h=240&fit=fill&fill=solid&fill-color=FFFFFF&s=4d7c689e8f7c1bdccf8776ed1652ee0d",
        preco: 395.00
    },
    {
        id: 8,
        produto: "LOL Present Surprise",
        serie: "Present Surprise",
        foto: "https://img.br.my-best.com/product_images/6164110b293c2123fbb7efc44087cde9.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=abcf6f01b029ccf921de33d90a282e17",
        preco: 104.99
    },
    {
        id: 9,
        produto: "LOL Surprise Pop-Up Store",
        serie: "Surprise Pop-Up Store",
        foto: "https://img.br.my-best.com/product_images/04b7bbe19abf1f21b250c567258f109e.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=2804eb08bd24f50df4063226665991b2",
        preco: 375.00
    },
    {
        id: 10,
        produto: "LOL Under Wraps Confetti",
        serie: "Under Wraps Confetti",
        foto: "https://img.br.my-best.com/product_images/bc06ceef483eb49eedbf4fc73068947c.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=ab08b3553c385f1fc93dc75269070cca",
        preco: 174.90
    }
];

export async function GET(){
    return NextResponse.json(listaDeLols)
}