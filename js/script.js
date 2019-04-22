(function ($) {
    $(document).ready(() => {
        // Выберите при помощи селекторов jQuery

        // - все HTML - элементы strong и окрасьте их в зеленый цвет
        $('strong').css({
            'background-color': 'green'
        });

        // — найдите все HTML - элементы em и добавьте им класс.selected
        $('em').addClass('selected');

        // —найдите все элементы mark, которые находятся в div с классом row и задайте им класс.selected
        $('mark', '.row').addClass('selected');

        // — найдите все гиперссылки и удалите у них подчеркивания
        $('a').css({
            'text-decoration': 'none'
        });

        // найдите все HTML - элементы, который содержат слово «Задания» и находятся в элементе с классом.container
        console.log($('.container :contains("Задания")'));
        console.log($('.container:contains("Задания")'));

        /* — переключите элементы strong с классом some в состояние без этого класса, а тем элементам(strong),
        у которых небыло этого класса— добавьте.*/
        $.each($('strong'), (index, value) => {
            $(value).hasClass('some') ? $(value).removeClass('some') : $(value).addClass('some');
        });

        // — среди набора элементов с классом.row удалите класс у второго элемента
        $('.row:eq(1)').removeClass();

        //- прочитайте CSS - свойство color у второй гиперсылки в тексте
        console.log($('a:eq(1)').css('color'));
    });
}(jQuery))