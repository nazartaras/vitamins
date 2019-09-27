export const Task1B = (str) => {

    let vitaminsArray = [];
    let black = [];
    let grey = [];
    let white = [];

    vitaminsArray = str.split(' ');

    vitaminsArray.map(elem => {
        switch (elem[1]) {
            case 'B':
                black.push(elem[0]);
                break;

            case 'G':
                grey.push(elem[0]);
                break;

            case 'W':
                white.push(elem[0]);
                break;
            default:
                break;
        }
    });

    black.sort();
    grey.sort();
    white.sort();

    let startColor = vitaminsArray[0][1];
    let currColor = startColor === 'B' ? 'G' : 'B';
    let result = [];

    const changeAllToWhite = (length, source, target, current) => {

        if (length === 0) {
            return;
        }

        changeAllToWhite(length - 1, source, current, target);

        switch (source + "-" + target) {

            case "G-B":
                black.push(grey.pop());
                result.push([black[black.length - 1], source, target]);
                break;


            case "G-W":
                white.push(grey.pop());
                result.push([white[white.length - 1], source, target]);
                break;

            case "B-G":
                grey.push(black.pop());
                result.push([grey[grey.length - 1], source, target]);
                break;

            case "B-W":
                white.push(black.pop());
                result.push([white[white.length - 1], source, target]);
                break;

            case "W-G":
                grey.push(white.pop());
                result.push([grey[grey.length - 1], source, target]);
                break;

            case "W-B":
                black.push(white.pop());
                result.push([black[black.length - 1], source, target]);
                break;
            default:
                break;
        }

        changeAllToWhite(length - 1, current, target, source);

    }

    changeAllToWhite(vitaminsArray.length, startColor, 'W', currColor);

    result = JSON.stringify(result);

    return result;

}