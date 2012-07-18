jQuery(document).ready(function ($) {

    //������������� Stellar.js
    $(window).stellar();

    //��� ��������� ����������
    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');

    //��������� ������� waypoints
    slide.waypoint(function (event, direction) {

        //��� ���������� ��������� data-slide 
        dataslide = $(this).attr('data-slide');

        //���� ������������ ��������� ����� �� �����, �� �������� ������� ��� ���������
        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        // else ���� ������������ ��������� ���� �� �����, �� �������� ������� ��� ��������� and
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });

    //�������� waypoints ��� ������� ������
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    //�������� �������� ����� ��������
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }

    //����� ������������ �������� �� ������ � ���������, �������� �������� ��������� data-slide ������ � �������� ��� ������� goToByScroll
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    //����� ������������ �������� �� ������ ��������, �������� �������� ��������� data-slide ������ � �������� ��� ������� goToByScroll
    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });

});
