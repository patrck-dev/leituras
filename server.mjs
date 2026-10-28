import http from 'node:http';
import {readFile} from 'node:fs/promises';
const files={'/':'index.html','/index.html':'index.html','/styles.css':'styles.css','/app.js':'app.js','/catalog.js':'catalog.js'};
const mime={html:'text/html',css:'text/css',js:'text/javascript'};
http.createServer(async(req,res)=>{const f=files[new URL(req.url,'http://localhost').pathname];if(!f){res.writeHead(404);return res.end('Não encontrado');}try{res.setHeader('Content-Type',`${mime[f.split('.').pop()]}; charset=utf-8`);res.end(await readFile(new URL(f,import.meta.url)));}catch{res.writeHead(500);res.end('Erro de leitura');}}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
