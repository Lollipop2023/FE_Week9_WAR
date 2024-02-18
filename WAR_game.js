/* So I wrote down my plans for this game. I had to look it up, because I've never played it. So learned a card game too! 
Full disclosure, new job this week on top of being sick and foolishly trying to fix last weeks code for a day before realizing
I don't have the time! A friend of mine that codes as a hobby made a suggestion that after I write down my intentions, try my program
and if it doesn't run...feed it through ChatGPT and see what it would do differently. For my stress to life ratio right now. Thats what I did.
So most of these notes will likely be what I learned by researching why ChatGPT did it. A second week, not proud...but learning a lot. 
I started writing for the Card, Deck and Player classes. I really struggled with the ranking const because I wanted to make them actual
numerical values. ChatGPT showed it as strings in the Deck class...so I rolled with it. I also tried to build the Deck class first vs ChatGPT
that built the Card class first. Also I chose to use a lot of the naming they used as well, because once I read it that made more sense and 
helped me keep things straight in my thinking process.*/


class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
}
/* For the Deck class, I kept trying to overcomplicate things (simplify things in my mind) by having the cards push to two separate players
as their dealt hands. Obviously didn't work and was frustrating. Thankfully, ChatGPT showed me that I keep trying to combine things that 
have to be programmed apart from this first construct. Really eye opening once I saw how they did it. I am actually really happy things went
this way here because I learn more from watching and reading for awhile instead of the try and fail method most learn from. 
So the cards being pushed into their own array first, fought everything in my being, LOL! But, having the mix and deal sections make way more
sense now that I see them. I did rename the mix from ChatGPT because they called it Shuffle and for some reason that throws me. I don't play
cards...can you tell? This did give me a great opportunity to research some new things like "rank of ranks",etc. That feels like a concept out
of nowhere that would have taken me more than 20 hours to find. The const j and its operation were awesome to come across and research. I have 
plenty of uses for that in my head! And in a working context, it makes sense and I feel I can utilize it later. By creating the two card variables 
or maybe iterations is a better word...I am still trying to figure out exactly how line 45 functions. I did try the DevTools...didn't really 
answer my questions well, but was good practice that I am gonna need a LOT of. */

class Deck {
    constructor() {
        this.cards = [];
        const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        for (let suit of suits) {
            for (let rank of ranks) {
                this.cards.push(new Card(suit, rank));
            }
        }
    }

    mix() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

/* Ah deal...the mindnumbingly simple answer to how to get hands to the players...I really tried so hard to skip this and work it in 
to something else. Gave myself a bloody nose overthinking. So thank you ChatGPT for showing me that a thousand simple steps is still 
easier than one very complicated and contrived step. Needing another array for the hands and having to set out parameters for the number
of hands and cards per had just flat did not occur to me. I am questioning all my life training at this point, seriously. Another fun
research project what the cards.pop feature. I understand how in this scenario .pop is useful...I would love some other real life 
examples to help solidify its everyday use. */

    deal(numHands, cardsPerHand) {
        const hands = [];
        for (let i = 0; i < numHands; i++) {
            hands.push([]);
        }
        for (let j = 0; j < cardsPerHand; j++) {
            for (let i = 0; i < numHands; i++) {
                hands[i].push(this.cards.pop());
            }
        }
        return hands;
    }
}

/* Wait theres more! Player class...my design was total crap. I managed the points part...everything else was wrapped up in that brainstorm
of I should be able to combine everything and have it work. I also struggle with calling things "name" where we aren't entering actual names
in from somewhere...but I tried renaming player to make it generic and ended up confusing myself into brain knots quickly enough that I conceded
to using "name". The playCard and receiveCard sections...again, I just flat didn't think of that needing to be its own entity. The "computers are
really stupid" phrase is really hitting home in this project. Even more so, the way they are done...at this point is so far from my realm of 
possibility, I am thankful I tried ChatGPT to just get the exposure! It was fun to research and I kinda wish I had a week just to go explore
those operations in MDN! (Flat just wish I had a week to breath again...but I digress.) At least the points...I actually had an original concept
to include! However...my attempt was far more complicated and trying to combine with other things. The simplicity of this.points++ is mind-melting
to me at this time, but I have faith that as I get more practice reading code, attempting to write my code, and researching all the possibilities
to code I will figure this out!*/

class Player {
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.hand = [];
    }

    playCard() {
        return this.hand.pop();
    }

    receiveCards(cards) {
        this.hand = this.hand.concat(cards);
    }
    addPoint() {
        this.points++;
    }
}

/* Ever had one of those moments that you feel really stupid and all you can do is put your elbows on your knees, then your head in your hands
and just laugh at your ridiculousness? When ChapGPT made the WarGame class, that was my reaction. I very much want my entire code to encompass the
game itself. Wasn't thinking of it as a separate portion of code. My mind was in a setting of it all comes together as the game itself. So, I 
did not have ANY of this class even remotely close to what it needed to be. I was still trying to conceive the comparison of cards portion for a 
"round". So I cannot take credit for any portion of this, flat out. Makes me even more thankful for ChatGPT...I know it seems like a crutch, but 
for my learning style right now I cannot express the level of "AHA" moment I had reading this. To top it off, by surrendering to the "I don't know"
in my head, this opened up so many new levels of programming possibility for me. I have read it at least 30 times and I still find something new
when I go through it. Roughly 30-35 lines of code, that I couldn't come up with right now if my life depends on it. They seem so simple, but at 
the same time are so intricate. I let my brain rest on an idea for a little bit and come back to it...and something else clicks. Sad I am not
anywhere near this level, but I hope to be someday with continued exposure! Rest assured...even after I turn this in, I am gonna be researching
this code and using DevTools on it to learn what it does. */

class WarGame {
    constructor() {
        this.deck = new Deck();
        this.deck.mix();
        this.players = [new Player('Player 1'), new Player('Player 2')];
        const hands = this.deck.deal(2, 26);
        for (let i = 0; i < 2; i++) {
            this.players[i].receiveCards(hands[i]);
        }
    }

    playRound() {
        const cardsInPlay = this.players.map(player => player.playCard());
        const values = cardsInPlay.map(card => this.cardValue(card));
        const maxIndex = values.indexOf(Math.max(...values));
        if (values[0] === values[1]) {
            console.log("Stalemate");
        } else {
            this.players[maxIndex].addPoint();
            console.log(`${this.players[maxIndex].name} wins this round!`);
        }
    }

    /* I do want to say...just to make myself feel better. I was very happy to see the values assigned with the face cards here. This was
    what my mind wanted when I was trying to build my deck. You can probably imagine my frustration. BUT...I don't feel crazy or stupid after
    I read through these lines. Very incompetent for now...but not crazy or stupid. LOL! */

    cardValue(card) {
        const cardRank = card.rank;
        const faceCards = { 'Jack': 11, 'Queen': 12, 'King': 13, 'Ace': 14 };
        return faceCards[cardRank] || parseInt(cardRank);
    }

    play() {
        while (this.players[0].hand.length > 0) {
            this.playRound();
        }
        this.displayScore();
    }

/* Ah the score. I did write an initial concept for this portion at least. I wanted it under the player class. My code was pretty much the 
equivalent to caveman drawings by comparison...but I DID have a if/else if loop for determining and displaying the winner! So me:1, ChatGPT:2,410,635...
but who is counting, right?*/

    displayScore() {
        console.log(`Final Score:
        ${this.players[0].name}: ${this.players[0].points}
        ${this.players[1].name}: ${this.players[1].points}`);
        if (this.players[0].points > this.players[1].points) {
            console.log(`${this.players[0].name} wins the game!`);
        } else if (this.players[0].points < this.players[1].points) {
            console.log(`${this.players[1].name} wins the game!`);
        } else {
            console.log("It's a tie!");
        }
    }
}

const warGame = new WarGame();
warGame.play();

/* On a final note, after just learning this game. Reading all this code over and over...I will give you a chuckle. I was hunting like crazy 
trying to figure out why the number of rounds varied. LOL! Sitting here thinking I am missing something, only to have my significant other show
up for our dinner date and show concern I was stressing. Explained my dilemma...and he simply states "you play until one of you has all the cards".
Thank goodness for occasional eating crow moments. Enjoy your laugh!*/
