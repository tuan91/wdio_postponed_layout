


describe('postponed-layout', () => {
    it('test', () => {
        browser.url('https://www.mytoys.de/birkmann-kekskunst-zum-selbermachen-4283014.html');
        const box = $('.prod-info__box-container.js-prod-info-box');
        box.scrollIntoView();
        browser.checkElement(box, 'box-aktion-banner', {});
    });
    it('test1', () => {
        browser.url('https://www.mytoys.de/birkmann-kekskunst-zum-selbermachen-4283014.html');
        const box = $('.prod-info__box-container.js-prod-info-box');
        box.scrollIntoView();
        browser.checkElement(box, 'box-aktion-banner1', {});
    });
});