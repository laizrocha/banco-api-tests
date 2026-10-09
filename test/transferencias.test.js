const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const { obterToken } = require('../helpers/autenticacao');
const postTransferencias = require('../fixtures/postTransferencias.json');

describe('Transferências', () => {

    let token

    beforeEach(async () => {
        token = await obterToken('julio.lima', '123456');
    })

    describe('POST /transferencias', () => {

        it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de R$ 10,00', async () => {
            const bodyTransferencias = { ...postTransferencias }

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .send(bodyTransferencias);

            expect(resposta.status).to.equal(201);
        });
        it('Deve falhar com 422 quando o valor da transferência for abaixo de R$ 10,00', async () => {
            const bodyTransferencias = { ...postTransferencias }
            bodyTransferencias.valor = 9.99

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .send(bodyTransferencias);

            expect(resposta.status).to.equal(422);
        });
    });

    describe('GET /transferencias/{}', () => {

        it('Deve retornar sucesso com 200 e dados iguais ao registro de transferencia contido no banco de dados quando o ID for válido', async () => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias/1')
                .set('Authorization', 'Bearer ' + token);

            expect(resposta.status).to.equal(200);
            expect(resposta.body.id).to.equal(1);
            expect(resposta.body.id).to.be.a('number');
        });
    });

    describe('GET /transferencias/{}', () => {

        it('Deve retornar 10 elementos na paginação quando informar limite de 10 registros', async () => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias?page=1&limit=10')
                .set('Authorization', 'Bearer ' + token);

            expect(resposta.status).to.equal(200);
            expect(resposta.body.limit).to.equal(10);
            expect(resposta.body.length).to.equal(10);
        })
    });
})
