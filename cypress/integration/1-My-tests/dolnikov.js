
describe('Тестирование сайта Математический Факультет', function () {

    it('Проверка, что при переходе в статью урл будет верный', function () {
        cy.visit('https://math.uniyar.ac.ru/professors/show/2f195ecf-4ca7-442d-b589-293060d03108');
        cy.contains('Студентам').click();
        cy.url().should('eq', 'https://math.uniyar.ac.ru/for-students')
    })
})
