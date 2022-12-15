
describe('Тестирование сайта Математический Факультет', function () {

    it('Проверка, что при переходе в статью урл будет верный', function () {
        cy.visit('https://math.uniyar.ac.ru');
        cy.contains('Студентам').click();
        cy.url().should('eq', 'https://math.uniyar.ac.ru/for-students')
    })
})
