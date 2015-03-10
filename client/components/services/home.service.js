'use strict';

angular.module('romaleev')
    .factory('homeService', function() {
        return {
            header_title: "Roman Malieiev",
            contacts: [{
                title: "Linkedin",
                icon: "fa-linkedin",
                url: "http://linkedin/in/romaleev"
            }, {
                title: "GitHub",
                icon: "fa-github",
                url: "https://github.com/romaleev"
            }, {
                title: "StackOverflow",
                icon: "fa-stack-overflow",
                url: "http://stackoverflow.com/users/991818/roman-malieiev"
            }, {
                title: "Vkontakte",
                icon: "fa-vk",
                url: "http://vk.com/romaleev"
            }, {
                title: "Facebook",
                icon: "fa-facebook",
                url: "http://fb.com/romaleev"
            }, {
                title: "Instagram",
                icon: "fa-instagram",
                url: "http://instagram.com/romaleev"
            }]
        };
    });