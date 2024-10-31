const request = require('supertest');

describe('Testes da SWAPI', () => {

    
    test('Deve visualizar informações de um planeta existente', async () => {
        const resposta = await request("https://swapi.dev/api").get("/planets/1");
        expect(resposta.status).toBe(200);
        expect(resposta.body.name).toBe('Tatooine');
    });

    test('Deve visualizar informações de uma nave existente', async () => {
        const resposta = await request("https://swapi.dev/api").get("/starships/21");
        expect(resposta.status).toBe(200);
        expect(resposta.body.name).toBe('Slave 1');
    });
    test('Deve visualizar informações de um filme existente', async () => {
        const resposta = await request("https://swapi.dev/api").get("/films/1");
        expect(resposta.status).toBe(200);
        expect(resposta.body.title).toBe('A New Hope');
    });

    test('Deve receber uma mensagem de erro ao buscar um planeta inexistente', async () => {
        const resposta = await request("https://swapi.dev/api").get("/planets/9999");
        expect(resposta.status).toBe(404);
    });

    
    // test('Deve receber uma mensagem de erro ao buscar uma nave inexistente', async () => {
    //     const resposta = await request("https://swapi.dev/api").get("/starships/9999");
    //     expect(resposta.status).toBe(404);
    // });

    
    // test('Deve receber uma mensagem de erro ao buscar um filme inexistente', async () => {
    //     const resposta = await request("https://swapi.dev/api").get("/films/9999");
    //     expect(resposta.status).toBe(404);
    // });

    
    // test('Deve visualizar todos os planetas', async () => {
    //     const resposta = await request("https://swapi.dev/api").get("/planets");
    //     expect(resposta.status).toBe(200);
    //     expect(resposta.body.results.length).toBeGreaterThan(0);
    // });

    
    // test('Deve listar os veículos de Luke Skywalker', async () => {
    //     const resposta = await request("https://swapi.dev/api").get("/people/1");
    //     expect(resposta.status).toBe(200);
    //     expect(resposta.body.vehicles.length).toBeGreaterThan(0);
    //     expect(resposta.body.vehicles).toContain("https://swapi.dev/api/vehicles/14/");
    // });

    
    // test('Deve visualizar todos os filmes', async () => {
    //     const resposta = await request("https://swapi.dev/api").get("/films");
    //     expect(resposta.status).toBe(200);
    //     expect(resposta.body.results.length).toBeGreaterThan(0);
    // });

    
    // test('Deve receber uma mensagem de erro ao buscar uma rota inexistente', async () => {
    //     const resposta = await request("https://swapi.dev/api").get("/heroes");
    //     expect(resposta.status).toBe(404);
    // });
});


