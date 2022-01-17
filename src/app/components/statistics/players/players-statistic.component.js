import { render } from "@testing-library/react";
import React from "react";
import "./players-statistic.component.css"


class Statistics extends React.Component {

    constructor(props) {
        super(props);
        this.poly = React.createRef();
    }

    // Stats based on http://sofifa.com/player/20801?hl=en-US (march 2016)

    Player(options) {
        this.averageStats = [];
        this.infos = options.infos;
        this.stats = options.stats;
    }

    /**
       * Get the average stats for the specific category
       * @param {string} category name (e.g. 'attacking')
       * @return {Number} category average (rounded)
    **/
    Statistics.Player.prototype.averageCategoryStats = function averageStats(category) {
        var ar = [];
        for (var i in this.stats[category]) {
            ar.push(this.stats[category][i]);
        }
        var total = ar.reduce(function (prev, stat) {
            return (prev + stat);
        });
        return Math.round(total / ar.length);
    };


    // Chart manipulation
    var polygon = this.poly.current,
        r = 100,
        sin30 = 1 / 2,
        cos30 = Math.sqrt(3) / 2,
        Points = {
            x: [1, 1 + cos30, 1 + cos30, 1, 1 - cos30, 1 - cos30],
            y: [0, sin30, 1 + sin30, 2, 1 + sin30, sin30],
        },
        playerPoints = {
            x: [0, cos30, cos30, 0, -cos30, -cos30],
            y: [0, -sin30, sin30, 1, sin30, -sin30],
        };
    console.log(r)

    for (var i = 0; i < polygon.points.numberOfItems; i++) {
        polygon.points.getItem(i).x = Points.x[i] * r;
        polygon.points.getItem(i).y = Points.y[i] * r;
    }

    var svg = document.getElementById('chart'),
        playerHexagon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');

    playerHexagon.setAttribute('id', 'playerHexagon');
    playerHexagon.setAttribute('points', '100,100 100,100 100,100 100,100 100,100 100,100');
    playerHexagon.setAttribute('style', 'stroke:hsla(180, 70%, 70%, 1); fill:hsla(180, 70%, 70%, .5); marker-start: url(#markerCircle); marker-mid: url(#markerCircle);');
    svg.appendChild(playerHexagon);


    // CR7 Creation
    var ronaldo = new Player({
        infos: {
            photo: '//sport.niooz.fr/cache/mediaurl/600x200/8c4a7b8e5efe12a51e8e2e00491d37c8.jpg',
            name: 'Cristiano Ronaldo',
            team: 'Real Madrid FC',
            age: 31,
            nation: 'Portugal',
            position: 'Forward',
            foot: 'Right',
        },
        stats: {
            attacking: {
                'Crossing': 82,
                'Finishing': 95,
                'Heading Accuracy': 86,
                'Short Passing': 81,
                'Volleys': 87,
            },
            skill: {
                'Dribbling': 93,
                'Curve': 88,
                'Free Kick Accuracy': 77,
                'Long Passing': 72,
                'Ball Control': 91,
            },
            movement: {
                'Acceleration': 91,
                'Sprint Speed': 93,
                'Agility': 90,
                'Reactions': 92,
                'Balance': 62,
            },
            power: {
                'Shot Power': 94,
                'Jumping': 94,
                'Stamina': 90,
                'Strength': 79,
                'Long Shots': 93,
            },
            mentaly: {
                'Aggression': 62,
                'Interceptions': 29,
                'Positioning': 93,
                'Vision': 81,
                'Penalties': 85,
            },
            defending: {
                'Marking': 22,
                'Standing Tackle': 31,
                'Sliding Tackle': 23,
            }
        }
    });

    // T.Silva creation
    var silva = new Player({
        infos: {
            photo: '//www.footmercato.net/images/a/thiago-silva-fait-l-eloge-de-pogba_150564.jpg',
            name: 'Thiago Silva',
            team: 'Paris Saint-Germain',
            age: 30,
            nation: 'Brazil',
            position: 'Center-back',
            foot: 'Right',
        },
        stats: {
            attacking: {
                'Crossing': 60,
                'Finishing': 38,
                'Heading Accuracy': 82,
                'Short Passing': 79,
                'Volleys': 63,
            },
            skill: {
                'Dribbling': 68,
                'Curve': 61,
                'Free Kick Accuracy': 73,
                'Long Passing': 81,
                'Ball Control': 80,
            },
            movement: {
                'Acceleration': 72,
                'Sprint Speed': 76,
                'Agility': 75,
                'Reactions': 84,
                'Balance': 68,
            },
            power: {
                'Shot Power': 78,
                'Jumping': 93,
                'Stamina': 74,
                'Strength': 81,
                'Long Shots': 71,
            },
            mentaly: {
                'Aggression': 77,
                'Interceptions': 91,
                'Positioning': 59,
                'Vision': 74,
                'Penalties': 71,
            },
            defending: {
                'Marking': 90,
                'Standing Tackle': 91,
                'Sliding Tackle': 89,
            }
        }
    });

    // Pogba Creation
    var pogba = new Player({
        infos: {
            photo: '//cdn.images.express.co.uk/img/dynamic/67/590x/Paul-Pogba-602242.jpg',
            name: 'Paul Pogba',
            team: 'Juventus FC',
            age: 22,
            nation: 'France',
            position: 'Centre midfield',
            foot: 'Right',
        },
        stats: {
            attacking: {
                'Crossing': 76,
                'Finishing': 70,
                'Heading Accuracy': 72,
                'Short Passing': 85,
                'Volleys': 84,
            },
            skill: {
                'Dribbling': 88,
                'Curve': 82,
                'Free Kick Accuracy': 80,
                'Long Passing': 81,
                'Ball Control': 89,
            },
            movement: {
                'Acceleration': 75,
                'Sprint Speed': 79,
                'Agility': 75,
                'Reactions': 86,
                'Balance': 61,
            },
            power: {
                'Shot Power': 91,
                'Jumping': 85,
                'Stamina': 90,
                'Strength': 91,
                'Long Shots': 91,
            },
            mentaly: {
                'Aggression': 80,
                'Interceptions': 71,
                'Positioning': 83,
                'Vision': 86,
                'Penalties': 76,
            },
            defending: {
                'Marking': 71,
                'Standing Tackle': 77,
                'Sliding Tackle': 83,
            }
        }
    });

    var currentPlayerAllStats = [0, 0, 0, 0, 0, 0],
        newPlayerAllStats = [0, 0, 0, 0, 0, 0],
        otherPlayer = document.getElementsByClassName('otherPlayer'),
        otherPlayerArray = Array.prototype.slice.call(otherPlayer),
        playerLine = document.getElementsByClassName('playerLine'),
        playerLineArray = Array.prototype.slice.call(playerLine);

    otherPlayerArray.forEach(function (player) {
        player.addEventListener('click', runStats);
        player.addEventListener('mouseenter', displayName);
        player.addEventListener('mouseleave', displayName);
    });

    // This below function is so dirty and repetitive, I should refactor it
    function displayName(event) {
        playerLineArray.forEach(function (line) {
            if (event.target.classList.contains('silva')) {
                if (line.classList.contains('silva')) {
                    line.classList.toggle('playerLineShow');
                }
            } else if (event.target.classList.contains('ronaldo')) {
                if (line.classList.contains('ronaldo')) {
                    line.classList.toggle('playerLineShow');
                }
            } else if (event.target.classList.contains('pogba')) {
                if (line.classList.contains('pogba')) {
                    line.classList.toggle('playerLineShow');
                }
            }
        });

        otherPlayerArray.forEach(function (el) {
            if (el.classList.contains('playerName')) {
                if (event.target.classList.contains('silva') && el.classList.contains('silva')) {
                    event.type == 'mouseleave' ? el.classList.add('transparent') : el.classList.remove('transparent');
                }
                if (event.target.classList.contains('ronaldo') && el.classList.contains('ronaldo')) {
                    event.type == 'mouseleave' ? el.classList.add('transparent') : el.classList.remove('transparent');
                }
                if (event.target.classList.contains('pogba') && el.classList.contains('pogba')) {
                    event.type == 'mouseleave' ? el.classList.add('transparent') : el.classList.remove('transparent');
                }
            }
        });
    }


    function runStats(event) {
        if (event.target.classList.contains('silva')) {
            newPlayerAllStats = silva.averageStats;
            removeFilter('imageSilva');
        } else if (event.target.classList.contains('ronaldo')) {
            newPlayerAllStats = ronaldo.averageStats;
            removeFilter('imageRonaldo');
        } else if (event.target.classList.contains('pogba')) {
            newPlayerAllStats = pogba.averageStats;
            removeFilter('imagePogba');
        }
    }

    var playerImages = document.getElementsByTagName('image'),
        playerImagesArray = Array.prototype.slice.call(playerImages);

    function removeFilter(playerImage) {
        playerImagesArray.forEach(function (image) {
            image.id == playerImage ? image.classList.remove('grayscale') : image.classList.add('grayscale');
        })
    }

    /**
       * Draw the new playerHexagon points
       * @param {Array} player stats (e.g. 'ronaldo.averageStats')
    **/
    function drawPlayerStats(playerStats) {
        for (var i = 0; i < playerHexagon.points.numberOfItems; i++) {
            playerHexagon.points.getItem(i).x = r + playerPoints.x[i] * playerStats[i];
            if (i === 0) {
                playerHexagon.points.getItem(i).y = r - playerStats[i];
            } else {
                playerHexagon.points.getItem(i).y = r + playerPoints.y[i] * playerStats[i];
            }
        }
    }

    /**
       * Get the average stats for all categories
       * @param {Object} instance of Player (e.g. 'ronaldo')
       * @return {Array} categories average stats (rounded)
    **/
    function getPlayerStats(player) {
        for (var category in player.stats) {
            player.averageStats.push(player.averageCategoryStats(category));
        }
    }

    var textStats = document.getElementsByClassName('textStats'),
        textStatsArray = Array.prototype.slice.call(textStats);
    /**
       * Draw the new hexagon points according to the currentPlayerAllStats {Array} values.
       * The currentPlayerAllStats are updated until they are equal to their corresponding newPlayerAllStats values.
    **/
    function anim() {
        currentPlayerAllStats.forEach(function (element, index) {
            if (currentPlayerAllStats[index] > newPlayerAllStats[index]) {
                currentPlayerAllStats[index]--;
                textStatsArray[index].textContent -= 1;
            } else if (currentPlayerAllStats[index] < newPlayerAllStats[index]) {
                currentPlayerAllStats[index]++;
                textStatsArray[index].textContent = Number(textStatsArray[index].textContent) + 1;
            }
        });
        drawPlayerStats(currentPlayerAllStats);
        window.requestAnimationFrame(anim);
    }

    getPlayerStats(ronaldo);
    getPlayerStats(silva);
    getPlayerStats(pogba);
    anim();

    render() {
        return (<>
            <div class='container'>
                <div class="playerBox">
                    <svg class='playerList' viewBox='0 0 650 200' width='600px' height='200px'>
                        <defs>
                            <clipPath id='clipS'>
                                <rect width='200' height='200' rx='10' ry='10' />
                            </clipPath>
                            <clipPath id='clipR'>
                                <rect x='225' width='200' height='200' rx='10' ry='10' />
                            </clipPath>
                            <clipPath id='clipP'>
                                <rect x='450' width='200' height='200' rx='10' ry='10' />
                            </clipPath>
                            <filter id='shadow'>
                                <feGaussianBlur in='SourceAlpha' stdDeviation='2' result='flou' />
                                <feOffset in='flou' dx='2' dy='2' result='shad' />
                                <feMerge>
                                    <feMergeNode in='shad' />
                                    <feMergeNode in='SourceGraphic' />
                                </feMerge>
                            </filter>
                            <filter id='grayscale'>
                                <feColorMatrix id='matrixFilter' type='matrix' values='0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 .4 0' />
                            </filter>
                        </defs>
                        <image id='imageSilva' class='grayscale otherPlayer silva' /* xlink: */href='//upload.wikimedia.org/wikipedia/commons/b/b8/20141118_1838_AUTBRA_4935.jpg' width='200' height='200' preserveAspectRatio='xMidYMin slice' style='clip-path:url(#clipS)' />
                        <image id='imageRonaldo' class='grayscale otherPlayer ronaldo' /* xlink: */href='//upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/440px-Cristiano_Ronaldo_2018.jpg' x='225' width='200' height='200' preserveAspectRatio='xMidYMin slice' style='clip-path: url(#clipR)' />
                        <image id='imagePogba' class='grayscale otherPlayer pogba' /* xlink: */href='//upload.wikimedia.org/wikipedia/commons/thumb/f/fc/FRA-ARG_%2811%29_-_Paul_Pogba_%28cropped%29.jpg/440px-FRA-ARG_%2811%29_-_Paul_Pogba_%28cropped%29.jpg' x='450' width='200' height='200' preserveAspectRatio='xMidYMin slice' style='clip-path:url(#clipP)' />
                        <line class='silva playerLine' x1='0' y1='145' x2='130' y2='145' />
                        <line class='silva playerLine' x1='200' y1='185' x2='70' y2='185' />
                        <line class='ronaldo playerLine' x1='225' y1='145' x2='355' y2='145' />
                        <line class='ronaldo playerLine' x1='425' y1='185' x2='295' y2='185' />
                        <line class='pogba playerLine' x1='450' y1='145' x2='580' y2='145' />
                        <line class='pogba playerLine' x1='650' y1='185' x2='520' y2='185' />
                        <g class='playerName'>
                            <rect class='transparent playerName otherPlayer silva' width='200' height='40' y='145' />
                            <text class='transparent playerName otherPlayer silva' x='100' y='170'>Thiago Silva</text>
                        </g>
                        <g class='playerName'>
                            <rect class='transparent playerName otherPlayer ronaldo' width='200' height='40' x='225' y='145' />
                            <text class='transparent playerName otherPlayer ronaldo' x='325' y='170'>Cristiano Ronaldo</text>
                        </g>
                        <g class='playerName'>
                            <rect class='transparent playerName otherPlayer pogba' width='200' height='40' x='450' y='145' />
                            <text class='transparent playerName otherPlayer pogba' x='550' y='170'>Paul Pogba</text>
                        </g>
                    </svg>
                </div>
                <div class='player'>
                    <svg class='chartInfos' viewBox='0 0 250 250' width='100%' height='250px'>
                        <text x='125' y='9'>atk</text>
                        <text class='textStats' x='125' y='22'>0</text>
                        <text x='230' y='60'>skl</text>
                        <text class='textStats' x='225' y='75'>0</text>
                        <text x='230' y='200'>mov</text>
                        <text class='textStats' x='225' y='185'>0</text>
                        <text x='125' y='250'>pow</text>
                        <text class='textStats' x='125' y='237'>0</text>
                        <text x='20' y='200'>mtl</text>
                        <text class='textStats' x='25' y='185'>0</text>
                        <text x='20' y='60'>def</text>
                        <text class='textStats' x='25' y='75'>0</text>
                        <svg id='chart' viewBox='0 0 200 200' width='200px' height='200px' x='25' y='25'>
                            <g id='grid' style='stroke:hsla(0, 100%, 100%, .3);'>
                                <defs>
                                    <polygon ref={ this.poly } id="polygon" points='100,100 100,100 100,100 100,100 100,100 100,100' />
                                    <marker style='fill:red;' id='markerCircle' markerWidth='4' markerHeight='4' refX='2' refY='2'>
                                        <circle cx='2' cy='2' r='2' style='stroke:none; fill:hsla(180, 70%, 70%, 1)' />
                                    </marker>
                                </defs>
                                <line id='l1' x1='100' y1='0' x2='100' y2='200' />
                                <line id='l2' x1='100' y1='0' x2='100' y2='200' />
                                <line id='l3' x1='100' y1='0' x2='100' y2='200' />
                                <use /* xlink: */href='#polygon' id='p1' />
                                <use /* xlink: */href='#polygon' id='p2' />
                                <use /* xlink: */href='#polygon' id='p3' />
                                <use /* xlink: */href='#polygon' id='p4' />
                            </g>
                        </svg>
                    </svg>
                </div>
            </div>
        </>)
    }
}

export default Statistics;