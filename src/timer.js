export default class Timer{
    constructor(root){
        this.root = timer.getHTML;
        this.el = {
            minutes: root.querySelector('.timer__time.--minutes'),
            seconds: root.querySelector('.timer__time.--seconds'),
            control: root.querySelector('.timer__button.--control'),
            reset: root.querySelector('.timer__button.--reset'),
        };
        console.log(this.el);
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