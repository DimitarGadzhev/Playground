(function () {
    'use strict';

    function reverseWords(string) {
        var words, reversedWord,
            output = [], i;

        words = string.split(' ')
            .filter(Boolean)
            .forEach(function (word) {
                reversedWord = [];
                for (i = 0; i < word.length; i += 1) {
                    reversedWord[i] = word[word.length - 1 - i];
                }
                output.push(reversedWord.join(''));
            });

        return output.join(' ');
    }

    var testStrings = [
            'Hello, how are you.',
            'Life is pretty good, isn’t it?',
            'I really love JavaScript!',
            'Look at this amazing library - chance!',
            chance.sentence({words: 6}),
            chance.paragraph({sentences: 2})
        ],
        reversed, result;

    testStrings.forEach(function (string) {
        reversed = reverseWords(string);

        result = {
            string: string,
            reversed: reversed
        };
        console.log(result);
    });
}());