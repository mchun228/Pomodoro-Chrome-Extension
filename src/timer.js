export default class Timer{
    constructor(root){
        this.root = timer.getHTML;
        this.time = 0;
        this.interval = null;
        this.render();
    }
    static getHTML(){
        return `
            <div className="timer">
                Timer
                <span className="timer__time timer__time --minutes">00</span>
                <span className="timer__time timer__time --minutes">:</span>
                <span className="timer__time timer__time --seconds">00</span>
                    <button type = "button" className="timer__button">Start</button>
                    <button type = "button" className="timer__button">Stop</button>
            </div>
        `;
    }
}