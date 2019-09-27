import React from 'react'
import './Draw.css'


class Draw extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLine: undefined,
            updated: false
        }
    }

    canvas = React.createRef();

    static getDerivedStateFromProps(props, state) {
        if (props.line.localeCompare(state.currentLine) !== 0) {
            return {
                updated: true,
                currentLine: props.line
            }
        }
        else {
            return {
                currentLine: state.currentLine,
                updated: false,
            };
        }
    }

    componentDidMount() {
        if (this.props.type === 'operations' && this.props.line.length > 0) {
            this.showOperationsList(this.props.line)
        }
    }

    componentDidUpdate() {

        if (this.state.updated && this.props.type === 'line') {

            this.updateCanvas(this.state.currentLine);
        }
        else if (this.state.updated && this.props.type === 'operations' && this.props.line.length > 0) {

            this.showOperationsList(this.props.line)
        }
    }

    updateCanvas = (figures) => {
        this.clearCanvas(figures);
    }

    drawLine = (figures) => {
        const lineArr = figures.split(" ");
        const lineParseArr = lineArr.map(el => {
            let newEl = el.split('');
            switch (newEl[1]) {
                case 'W':
                    newEl[1] = 'white';
                    break;
                case 'B':
                    newEl[1] = 'black';
                    break;
                case 'G':
                    newEl[1] = 'grey'
                    break;
                default:
                    break;
            }
            return newEl;
        })
        lineParseArr.map((el, index) => {
            switch (el[0]) {
                case '3':
                    this.triangle(index, el[1]);
                    break;
                case '4':
                    this.rectangle(index, el[1]);
                    break;
                case '5':
                    this.pentagon(index, el[1]);
                    break;
                case '6':
                    this.hexagon(index, el[1]);
                    break;
                case '7':
                    this.heptagon(index, el[1]);
                    break;
                case '8':
                    this.octagon(index, el[1]);
                    break;
                default:
                    break;
            }
        })
    }

    triangle = (index, color) => {
        const ctx = this.canvas.current.getContext('2d');
        const margin = index === 0 ? 10 : index * 40;
        const startPosition = index * 100 + margin;
        ctx.fillStyle = color;
        ctx.strokeStyle = 'black';
        ctx.beginPath();
        ctx.moveTo(startPosition + 50, 10);
        ctx.lineTo(startPosition, 110);
        ctx.lineTo(startPosition + 100, 110);
        ctx.lineTo(startPosition + 50, 10);
        ctx.stroke();
        ctx.fill();
    }

    rectangle = (index, color) => {
        const ctx = this.canvas.current.getContext('2d');
        const margin = index === 0 ? 10 : index * 40;
        const startPosition = index * 100 + margin;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = color;
        ctx.strokeRect(startPosition, 10, 100, 100);
        ctx.fillRect(startPosition, 10, 100, 100);
    }

    pentagon = (index, color) => {
        const ctx = this.canvas.current.getContext('2d');
        const margin = index === 0 ? 10 : index * 40;
        const startPosition = index * 100 + margin;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(startPosition + 30, 110);
        ctx.lineTo(startPosition, 60);
        ctx.lineTo(startPosition + 55, 10);
        ctx.lineTo(startPosition + 110, 60);
        ctx.lineTo(startPosition + 80, 110);
        ctx.lineTo(startPosition + 30, 110);
        ctx.stroke();
        ctx.fill();
    }

    hexagon = (index, color) => {
        const ctx = this.canvas.current.getContext('2d');
        const margin = index === 0 ? 10 : index * 40;
        const startPosition = index * 100 + margin;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(startPosition + 30, 110);
        ctx.lineTo(startPosition, 60);
        ctx.lineTo(startPosition + 30, 10);
        ctx.lineTo(startPosition + 80, 10);
        ctx.lineTo(startPosition + 110, 60);
        ctx.lineTo(startPosition + 80, 110);
        ctx.lineTo(startPosition + 30, 110);
        ctx.stroke();
        ctx.fill();
    }

    heptagon = (index, color) => {
        const ctx = this.canvas.current.getContext('2d');
        const margin = index === 0 ? 10 : index * 40;
        const startPosition = index * 100 + margin;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(startPosition + 30, 110);
        ctx.lineTo(startPosition, 73);
        ctx.lineTo(startPosition + 10, 43);
        ctx.lineTo(startPosition + 55, 10);
        ctx.lineTo(startPosition + 100, 43);
        ctx.lineTo(startPosition + 110, 73);
        ctx.lineTo(startPosition + 80, 110);
        ctx.lineTo(startPosition + 30, 110);
        ctx.stroke();
        ctx.fill();
    }

    octagon = (index, color) => {
        const ctx = this.canvas.current.getContext('2d');
        const margin = index === 0 ? 10 : index * 40;
        const startPosition = index * 100 + margin;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(startPosition + 30, 110);
        ctx.lineTo(startPosition, 73);
        ctx.lineTo(startPosition, 43);
        ctx.lineTo(startPosition + 30, 10);
        ctx.lineTo(startPosition + 80, 10);
        ctx.lineTo(startPosition + 110, 43);
        ctx.lineTo(startPosition + 110, 73);
        ctx.lineTo(startPosition + 80, 110);
        ctx.lineTo(startPosition + 30, 110);
        ctx.stroke();
        ctx.fill();
    }

    clearCanvas(lineStr) {
        const ctx = this.canvas.current.getContext('2d');
        let time = 0;
        const cleaner = setInterval(() => {
            time++;
            ctx.fillStyle = `rgba(255,255,255, ${time / 10})`
            ctx.fillRect(0, 0, this.canvas.current.width, this.canvas.current.height);
            if (time === 11) {
                ctx.clearRect(0, 0, this.canvas.current.width, this.canvas.current.height);
                this.drawLine(lineStr);
                clearInterval(cleaner);
            }
        }, 100);
    }

    showOperationsList(list) {
        let i = 0;
        const statesArray = JSON.parse(list);
        const statesTimer = setInterval(() => {
            this.updateCanvas(statesArray[i]);
            i++;
            if (i === statesArray.length) {
                clearInterval(statesTimer);
            }
        }, 1400)
    }

    render() {
        return <canvas width={700} ref={this.canvas} />
    }
}

export default Draw;