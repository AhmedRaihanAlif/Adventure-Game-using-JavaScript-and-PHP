
$.key = {
    left: 0,
    right: 0,
    up: 0,
    space: 0
}

$.offset = {
    x: 0,
    y: 0
}

$.dt = 0;
$.lt = 0;
$.elapsed = 0;
$.mute = 0;
$.glitch = 0;
$.canEdit = false;

$.ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

$.state;


$.W = Math.min(window.innerWidth,900);
$.H = Math.min(window.innerHeight,700);


$.setup = function () {
    $.main = document.getElementById('main');
    $.mainctx = $.main.getContext('2d');
    $.gameProgress = new $.gameLoad();

    $.main.width = $.W;
    $.main.height = $.H;

    $.sounds = [];

    if (window.AudioContext) {
        $.audioCtx = new AudioContext();

        var soundGen = new sonantx.SoundGenerator($.jumpInstrument);
        soundGen.createAudioBuffer(137, function (buffer) {
            $.sounds['jump'] = buffer;
        });
        soundGen.createAudioBuffer(157, function (buffer) {
            $.sounds['bounce'] = buffer;
        });
        soundGen.createAudioBuffer(134, function (buffer) {
            $.sounds['bounce1'] = buffer;
        });

        soundGen.createAudioBuffer(117, function (buffer) {
            $.sounds['bounce2'] = buffer;
        });

        soundGen.createAudioBuffer(127, function (buffer) {
            $.sounds['bounce3'] = buffer;
        });
        soundGen.createAudioBuffer(105, function (buffer) {
            $.sounds['bounce4'] = buffer;
        });
    }



    window.addEventListener('keydown', $.keydown, false);
    window.addEventListener('keyup', $.keyup, false);
    window.addEventListener('touchstart', $.touchstart);
    window.addEventListener('touchmove', $.touchmove);
    window.addEventListener('touchend', $.touchend);

   // document.getElementById("username").value = $.gameProgress.data.user == "default user" ? "" : $.gameProgress.data.user;
    $.state = new $.play();
    $.state.init();
    $.loop();
}


$.playSound = function (b, l) {
    if (!$.mute && window.AudioContext) {
        var source = $.audioCtx.createBufferSource();

        source.buffer = b;
        source.connect($.audioCtx.destination);

        source.start(0);
        return source;
    }
    return;

}


$.keydown = function (e) {
    if (!$.canEdit) { e.preventDefault() };
    if (e.keyCode === 37) { $.key.left = 1; };
    if (e.keyCode === 39) { $.key.right = 1; };
    if (e.keyCode === 32) { $.key.space = 1; };//32
    if (e.keyCode === 13) { $.key.enter = 1; };
}

$.keyup = function (e) {

    if (e.keyCode === 37) { $.key.left = 0; };
    if (e.keyCode === 39) { $.key.right = 0; };
    if (e.keyCode === 32) { $.key.space = 0; };
    if (e.keyCode === 13) { $.key.enter = 0; };
}

$.touchstart = function (e) {
     if (e.target.id=="overlay"||e.target.id=="body") { e.preventDefault() };
    // var action = e.target.dataset.action;
//		if (action) {
    var i = 0;
    while (i < e.touches.length) {
        p = e.touches[i];
        if (p.clientX < window.innerWidth / 4) { $.key.left = 1; }
        if (p.clientX > window.innerWidth - (window.innerWidth / 2)) { $.key.space = 1; }
        if (p.clientX > window.innerWidth / 4 && p.clientX < 2 * (window.innerWidth / 4)) { $.key.right = 1; }
        i++
    }

};

$.touchend = function (e) {
     if (e.target.id=="overlay"||e.target.id=="body") { e.preventDefault() };
    $.key.left = 0;
    $.key.right = 0;
    $.key.space = 0;
};

$.touchmove = function (e) {
    e.preventDefault();
};

$.updateDelta = function () {
    var now = Date.now();
    $.dt = (now - $.lt) / (1000 / 60);
    $.lt = now;
    $.elapsed += $.dt / 60;
}


$.loop = function () {
    //  setTimeout(function () {
    window.requestAnimFrame($.loop);
    $.update();
    $.render();
    //  }, 1000 / 60);
}

$.update = function () {
    $.updateDelta();
    $.state.update();
}

$.render = function () {
    $.mainctx.clearRect(0, 0, $.W, $.H);
    $.state.render();

}


window.addEventListener('load', function () {
    $.setup();
});
$.jumpInstrument = {
    "osc1_oct": 9,
    "osc1_det": 0,
    "osc1_detune": 0,
    "osc1_xenv": 0,
    "osc1_vol": 188,
    "osc1_waveform": 0,
    "osc2_oct": 9,
    "osc2_det": 0,
    "osc2_detune": 12,
    "osc2_xenv": 0,
    "osc2_vol": 186,
    "osc2_waveform": 0,
    "noise_fader": 0,
    "env_attack": 100,
    "env_sustain": 0,
    "env_release": 14545,
    "env_master": 70,
    "fx_filter": 0,
    "fx_freq": 0,
    "fx_resonance": 240,
    "fx_delay_time": 2,
    "fx_delay_amt": 157,
    "fx_pan_freq": 3,
    "fx_pan_amt": 47,
    "lfo_osc1_freq": 0,
    "lfo_fx_freq": 0,
    "lfo_freq": 0,
    "lfo_amt": 0,
    "lfo_waveform": 0
};

/*
$.song = {
    "rowLen": 6014,
    "endPattern": 8,
    "songData": [
        {
            "osc1_oct": 7,
            "osc1_det": 0,
            "osc1_detune": 0,
            "osc1_xenv": 1,
            "osc1_vol": 255,
            "osc1_waveform": 0,
            "osc2_oct": 7,
            "osc2_det": 0,
            "osc2_detune": 0,
            "osc2_xenv": 1,
            "osc2_vol": 255,
            "osc2_waveform": 0,
            "noise_fader": 0,
            "env_attack": 50,
            "env_sustain": 150,
            "env_release": 4800,
            "env_master": 200,
            "fx_filter": 2,
            "fx_freq": 600,
            "fx_resonance": 254,
            "fx_delay_time": 0,
            "fx_delay_amt": 0,
            "fx_pan_freq": 0,
            "fx_pan_amt": 0,
            "lfo_osc1_freq": 0,
            "lfo_fx_freq": 0,
            "lfo_freq": 0,
            "lfo_amt": 0,
            "lfo_waveform": 0,
            "p": [
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "c": [
                {
                    "n": [
                        142,
                        0,
                        0,
                        0,
                        142,
                        0,
                        0,
                        0,
                        142,
                        0,
                        0,
                        0,
                        142,
                        0,
                        0,
                        0,
                        142,
                        0,
                        0,
                        0,
                        142,
                        0,
                        0,
                        0,
                        142,
                        0,
                        0,
                        0,
                        142,
                        0,
                        0,
                        0
                    ]
                }
            ]
        },
        {
            "osc1_oct": 8,
            "osc1_det": 0,
            "osc1_detune": 0,
            "osc1_xenv": 0,
            "osc1_vol": 0,
            "osc1_waveform": 0,
            "osc2_oct": 8,
            "osc2_det": 0,
            "osc2_detune": 0,
            "osc2_xenv": 0,
            "osc2_vol": 0,
            "osc2_waveform": 0,
            "noise_fader": 60,
            "env_attack": 50,
            "env_sustain": 419,
            "env_release": 4607,
            "env_master": 130,
            "fx_filter": 1,
            "fx_freq": 10332,
            "fx_resonance": 120,
            "fx_delay_time": 4,
            "fx_delay_amt": 16,
            "fx_pan_freq": 5,
            "fx_pan_amt": 108,
            "lfo_osc1_freq": 0,
            "lfo_fx_freq": 0,
            "lfo_freq": 5,
            "lfo_amt": 187,
            "lfo_waveform": 0,
            "p": [
                0,
                0,
                0,
                3,
                3,
                3
            ],
            "c": [
                {
                    "n": [
                        165,
                        164,
                        164,
                        0,
                        0,
                        0,
                        0,
                        0,
                        50,
                        75,
                        72,
                        68,
                        68,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    "n": [
                        165,
                        164,
                        164,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        56,
                        65,
                        65,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    "n": [
                        125,
                        0,
                        0,
                        0,
                        116,
                        0,
                        0,
                        0,
                        106,
                        0,
                        0,
                        0,
                        125,
                        0,
                        0,
                        0,
                        116,
                        0,
                        0,
                        0,
                        106,
                        0,
                        0,
                        0,
                        125,
                        0,
                        0,
                        0,
                        116,
                        0,
                        0,
                        0
                    ]
                }
            ]
        },
        {
            "osc1_oct": 6,
            "osc1_det": 0,
            "osc1_detune": 0,
            "osc1_xenv": 1,
            "osc1_vol": 255,
            "osc1_waveform": 0,
            "osc2_oct": 6,
            "osc2_det": 0,
            "osc2_detune": 0,
            "osc2_xenv": 1,
            "osc2_vol": 255,
            "osc2_waveform": 0,
            "noise_fader": 14,
            "env_attack": 50,
            "env_sustain": 150,
            "env_release": 8181,
            "env_master": 161,
            "fx_filter": 2,
            "fx_freq": 5900,
            "fx_resonance": 240,
            "fx_delay_time": 6,
            "fx_delay_amt": 66,
            "fx_pan_freq": 0,
            "fx_pan_amt": 0,
            "lfo_osc1_freq": 0,
            "lfo_fx_freq": 0,
            "lfo_freq": 0,
            "lfo_amt": 0,
            "lfo_waveform": 0,
            "p": [
                0,
                0,
                1,
                1,
                1,
                1,
                1
            ],
            "c": [
                {
                    "n": [
                        135,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        151,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        116,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        151,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                }
            ]
        },
        {
            "osc1_oct": 8,
            "osc1_det": 0,
            "osc1_detune": 0,
            "osc1_xenv": 0,
            "osc1_vol": 0,
            "osc1_waveform": 0,
            "osc2_oct": 8,
            "osc2_det": 0,
            "osc2_detune": 0,
            "osc2_xenv": 0,
            "osc2_vol": 0,
            "osc2_waveform": 0,
            "noise_fader": 60,
            "env_attack": 50,
            "env_sustain": 419,
            "env_release": 4607,
            "env_master": 130,
            "fx_filter": 1,
            "fx_freq": 10332,
            "fx_resonance": 120,
            "fx_delay_time": 4,
            "fx_delay_amt": 16,
            "fx_pan_freq": 5,
            "fx_pan_amt": 108,
            "lfo_osc1_freq": 0,
            "lfo_fx_freq": 0,
            "lfo_freq": 5,
            "lfo_amt": 187,
            "lfo_waveform": 0,
            "p": [
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "c": [
                {
                    "n": [
                        0,
                        0,
                        130,
                        0,
                        0,
                        0,
                        130,
                        0,
                        0,
                        0,
                        130,
                        0,
                        0,
                        0,
                        130,
                        0,
                        0,
                        0,
                        130,
                        0,
                        0,
                        0,
                        130,
                        0,
                        0,
                        0,
                        130,
                        0,
                        0,
                        0,
                        130,
                        0
                    ]
                }
            ]
        },
        {
            "osc1_oct": 8,
            "osc1_det": 0,
            "osc1_detune": 0,
            "osc1_xenv": 1,
            "osc1_vol": 221,
            "osc1_waveform": 0,
            "osc2_oct": 8,
            "osc2_det": 0,
            "osc2_detune": 0,
            "osc2_xenv": 1,
            "osc2_vol": 210,
            "osc2_waveform": 0,
            "noise_fader": 33,
            "env_attack": 50,
            "env_sustain": 150,
            "env_release": 15454,
            "env_master": 196,
            "fx_filter": 3,
            "fx_freq": 11024,
            "fx_resonance": 240,
            "fx_delay_time": 6,
            "fx_delay_amt": 24,
            "fx_pan_freq": 0,
            "fx_pan_amt": 20,
            "lfo_osc1_freq": 0,
            "lfo_fx_freq": 1,
            "lfo_freq": 7,
            "lfo_amt": 64,
            "lfo_waveform": 0,
            "p": [
                1,
                0,
                1,
                0,
                0,
                1
            ],
            "c": [
                {
                    "n": [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        149,
                        147,
                        147,
                        147,
                        147
                    ]
                }
            ]
        }
    ],
    "songLen": 37
}*/
$.glitchType = ['walk', 'grab', 'blink', 'flatten', 'bounce', 'Rexpress'];

$.level = [
      {
            p: { x: 350, y: 630 },
            b: [{ x: 265, y: 727, t: 8, w: 640, h: 40 }, { x: 675, y: 412, t: 4 }]
      },
      {//jumper tutorial
            p: { x: 600, y: 1100 },
            b: [{ x: 0, y: 1235, t: 8, w: 1250, h: 40 }, { x: 261, y: 967, t: 0 }, { x: 921, y: 389, t: 0 }, { x: 579, y: 682, t: 0 }, { x: 546, y: 73, t: 4 }]
      },
      {//ice and land tutorial
            p: { x: 600, y: 1100 },
            b: [{ x: 283, y: 346, t: 2, w: 160, h: 40 }, { x: 686, y: 521, t: 2, w: 160, h: 40 }, { w: 200, h: 50, x: 877, y: -150, t: 4 }, { x: 468, y: 1090, t: 8, w: 160, h: 40 }, { x: 464, y: 775, t: 8, w: 160, h: 40 }, { x: -49, y: 1306, t: 8, w: 1280, h: 40 }, { x: 527, y: -3, t: 0, w: 160, h: 40 }]
      },
      {//wall climb tutorial
            p: { x: 600, y: 1810 },
            b: [{ x: 338, y: 2100, t: 8, w: 640, h: 40 }, { w: 100, h: 2100, x: 366, y: -1, t: 9 }, { w: 100, h: 2100, x: 848, y: -1, t: 9 }, { w: 20, h: 800, x: 464, y: 1265, t: 10 }, { w: 20, h: 400, x: 827, y: 493, t: 11 }, { x: 580, y: 1266, t: 8, w: 160, h: 40 }, { w: 200, h: 50, x: 561, y: -1, t: 4 }, { x: 346, y: -39, t: 8, w: 640, h: 40 }, { x: 467, y: 433, t: 8, w: 160, h: 40 }]
      },
      {//slider tutorial
            p: { x: 600, y: 610 },
            b: [{ x: 516, y: 556, t: 0 }, { x: 117, y: 316, t: 2 }, { x: 8, y: 751, t: 8, w: 1250, h: 40 }, { x: 1606, y: 128, t: 4 }, { x: 460, y: -136, t: 1 }]
      },
      {
            p: { x: 600, y: 710 },
            b: [{ x: 201, y: 1014, t: 8, w: 1280, h: 40 }, { w: 100, h: 1050, x: 198, y: 8, t: 9 }, { w: 40, h: 200, x: 432, y: 595, t: 12 }, { w: 40, h: 200, x: 892, y: 279, t: 13 }, { w: 200, h: 50, x: 318, y: 22, t: 4 }, { w: 100, h: 1050, x: 1385, y: 11, t: 9 }, { x: 194, y: -30, t: 8, w: 1280, h: 40 }, { w: 40, h: 200, x: 1344, y: 663, t: 13 }, { x: 297, y: 96, t: 8, w: 320, h: 40 }]
      },
      {//needs to be moved higher - 11
            p: { x: 600, y: 630 },
            b: [{ x: -50, y: -1350, t: 9 }, { x: 1150, y: -1350, t: 9 }, { x: 100, y: 500, t: 0 }, { x: 200, y: 200, t: 2 }, { x: 100, y: -100, t: 2 }, { x: 300, y: -400, t: 0 }, { x: 100, y: -900, t: 1 }, { x: 700, y: -1100, t: 4 }, { x: -50, y: 750, t: 8, w: 1250, h: 40 }]
      },


      {
            p: { x: 600, y: 1010 },
            b: [{ x: 322, y: 1603, t: 8, w: 640, h: 40 }, { x: 173, y: 214, t: 8, w: 320, h: 40 }, { w: 50, h: 1050, x: 960, y: 654, t: 9 }, { w: 50, h: 1050, x: 446, y: 248, t: 9 }, { w: 40, h: 200, x: 930, y: 1284, t: 13 }, { w: 20, h: 200, x: 495, y: 811, t: 10 }, { w: 200, h: 50, x: 206, y: 105, t: 4 }, { x: 961, y: 636, t: 8, w: 640, h: 40 }, { w: 800, h: 200, x: 573, y: -112, t: 1 }, { w: 50, h: 262.5, x: 1553, y: 373, t: 9 }, { x: 1554, y: 347, t: 8, w: 320, h: 40 }]
      },
      {
            p: { x: 600, y: 710 },
            b: [{ x: 442, y: 1047, t: 8, w: 320, h: 40 }, { x: 742, y: 842, t: 8, w: 160, h: 40 }, { x: 1090, y: 653, t: 8, w: 160, h: 40 }, { x: 1456, y: 495, t: 0, w: 160, h: 40 }, { x: 1798, y: 457, t: 3, w: 160, h: 40 }, { x: 2256, y: 287, t: 2, w: 160, h: 40 }, { w: 40, h: 400, x: 2599, y: -69, t: 12 }, { w: 800, h: 200, x: 3155, y: 70, t: 1 }, { w: 200, h: 50, x: 3940, y: 589, t: 4 }, { w: 40, h: 200, x: 4552, y: 300, t: 13 }]
      },

      {
            p: { x: 600, y: 1110 },
            b: [{ x: 494, y: 1345, t: 8 }, { x: 917, y: 1054, t: 1 }, { x: 2620, y: 925, t: 1 }, { x: 1783, y: 1255, t: 1 }, { x: 2898, y: 646, t: 0 }, { x: 2510, y: 499, t: 0 }, { x: 2061, y: 559, t: 0 }, { x: 571, y: 279, t: 4 }, { x: 1076, y: 447, t: 0 }, { x: 1582, y: 487, t: 0 }]
      },
      {
            p: { x: 600, y: 2000 },
            b: [{ x: 681, y: 1916, t: 0, w: 160, h: 40 }, { x: 519, y: 1549, t: 0, w: 160, h: 40 }, { x: 520, y: 2250, t: 8, w: 320, h: 40 }, { x: 472, y: 158, t: 8, w: 640, h: 40 }, { w: 50, h: 2100, x: 470, y: 193, t: 9 }, { w: 20, h: 400, x: 521, y: 481, t: 10 }, { x: 844, y: 415, t: 8, w: 40, h: 40 }, { w: 50, h: 1860, x: 840, y: 430, t: 9 }, { w: 50, h: 2100, x: 2217, y: 145, t: 9 }, { x: 1626, y: 2245, t: 8, w: 640, h: 40 }, { x: 1899, y: 149, t: 8, w: 320, h: 40 }, { w: 50, h: 1900, x: 1849, y: 150, t: 9 }, { w: 20, h: 800, x: 2195, y: 1306, t: 11 }, { w: 200, h: 50, x: 1960, y: 234, t: 4 }, { x: 2058, y: 902, t: 2, w: 160, h: 40 }, { w: 40, h: 200, x: 1891, y: 906, t: 12 }, { x: 1973, y: 602, t: 2, w: 160, h: 40 }, { x: 684, y: 1211, t: 0, w: 160, h: 40 }, { x: 1370, y: 1097, t: 0, w: 160, h: 40 }, { x: 1530, y: 1097, t: 0, w: 320, h: 40 }, { x: 1770, y: 1998, t: 0, w: 80, h: 40 }, { x: 1532, y: 1394, t: 0, w: 320, h: 40 }, { x: 1691, y: 1701, t: 0, w: 160, h: 40 }]
      },
      {
            p: { x: 1000, y: 2000 },
            b: [{ x: 825, y: 1887, t: 8, w: 320, h: 40 }, { x: 828, y: 2445, t: 8, w: 1280, h: 40 }, { w: 50, h: 525, x: 1736, y: 1920, t: 9 }, { w: 20, h: 200, x: 1716, y: 1966, t: 11 }, { x: 1735, y: 1886, t: 2, w: 320, h: 40 }, { w: 50, h: 525, x: 825, y: 1920, t: 9 }, { w: 50, h: 525, x: 1096, y: 1361, t: 9 }, { w: 50, h: 525, x: 2008, y: 1360, t: 9 }, { x: 1735, y: 1324, t: 8, w: 320, h: 40 }, { x: 824, y: 1328, t: 2, w: 320, h: 40 }, { w: 50, h: 525, x: 823, y: 802, t: 9 }, { x: 822, y: 764, t: 8, w: 320, h: 40 }, { w: 50, h: 525, x: 1733, y: 799, t: 9 }, { x: 1732, y: 761, t: 2, w: 320, h: 40 }, { w: 50, h: 525, x: 1094, y: 239, t: 9 }, { x: 825, y: 210, t: 2, w: 320, h: 40 }, { w: 200, h: 50, x: 870, y: 1766, t: 4 }, { w: 40, h: 200, x: 439, y: 315, t: 12 }, { x: 665, y: 1030, t: 0, w: 160, h: 40 }, { x: 447, y: 612, t: 0, w: 160, h: 40 }, { x: 447, y: 1468, t: 0, w: 160, h: 40 }, { w: 20, h: 400, x: 802, y: 1944, t: 11 }, { w: 20, h: 200, x: 1711, y: 819, t: 11 }, { x: 1372, y: 1583, t: 0, w: 160, h: 40 }, { x: 1352, y: 377, t: 0, w: 160, h: 40 }, { x: 1249, y: 986, t: 0, w: 160, h: 40 }]
      },
      {
            p: { x: 600, y: 4000 },
            b: [{ x: 8, y: 4169, t: 8, w: 1280, h: 40 }, { w: 100, h: 3900, x: 462, y: 267, t: 9 }, { w: 200, h: 50, x: 181, y: 4001, t: 4 }, { x: 762, y: 3935, t: 0, w: 160, h: 40 }, { w: 100, h: 4200, x: 4, y: -31, t: 9 }, { w: 20, h: 200, x: 1128, y: 3542, t: 11 }, { w: 40, h: 200, x: 1116, y: 3215, t: 13 }, { x: 591, y: 3184, t: 2, w: 320, h: 40 }, { w: 20, h: 400, x: 559, y: 2204, t: 10 }, { x: 651, y: 2834, t: 0, w: 160, h: 40 }, { w: 160, h: 400, x: 661, y: 1790, t: 13 }, { w: 40, h: 400, x: 558, y: 1193, t: 12 }, { x: 104, y: 3855, t: 8, w: 160, h: 40 }, { x: 105, y: 2868, t: 8, w: 160, h: 40 }, { x: 303, y: 2041, t: 8, w: 160, h: 40 }, { x: 103, y: 1321, t: 8, w: 160, h: 40 }, { x: 303, y: 411, t: 8, w: 160, h: 40 }, { w: 100, h: 4200, x: 1151, y: -31, t: 9 }, { x: 471, y: 255, t: 8, w: 80, h: 40 }, { x: 104, y: 1807, t: 0, w: 160, h: 40 }, { x: 302, y: 948, t: 0, w: 160, h: 40 }, { x: 104, y: 2455, t: 0, w: 160, h: 40 }, { x: 301, y: 3467, t: 0, w: 160, h: 40 }, { w: 100, h: 2100, x: 737, y: 10, t: 9 }]
      },
      {
            p: { x: 900, y: 1550 },
            b: [{ x: 3, y: 1708, t: 2, w: 1280, h: 40 }, { x: 1, y: 1200, t: 2, w: 1000, h: 40 }, { x: 2, y: 630, t: 2, w: 1000, h: 40 }, { x: 284, y: 921, t: 2, w: 1000, h: 40 }, { x: 282, y: 1458, t: 2, w: 1000, h: 40 }, { w: 40, h: 1600, x: -8, y: 109, t: 12 }, { w: 40, h: 1600, x: 1245, y: 352, t: 13 }, { x: 296, y: 325, t: 8, w: 1280, h: 40 }, { w: 100, h: 50, x: 1053, y: 1840, t: 4 }, { w: 800, h: 200, x: 1270, y: 4, t: 1 }, { w: 50, h: 2100, x: 2108, y: 256, t: 9 }, { w: 20, h: 1600, x: 2086, y: 260, t: 11 }, { x: 1424, y: 2121, t: 0, w: 160, h: 40 }, { x: 1376, y: 1282, t: 8, w: 320, h: 40 }, { x: 1402, y: 616, t: 8, w: 320, h: 40 }, { x: 1765, y: 1707, t: 0, w: 320, h: 40 }, { x: 1516, y: 941, t: 0, w: 320, h: 40 }]
      },
      {
            p: { x: 550, y: 630 },
            b: [{ x: 500, y: 764, t: 8, w: 160, h: 40 }, { w: 50, h: 1050, x: 1038, y: 383, t: 9 }, { w: 20, h: 400, x: 1088, y: 403, t: 10 }, { w: 20, h: 400, x: 1016, y: 402, t: 11 }, { x: 1327, y: 229, t: 0, w: 160, h: 40 }, { w: 50, h: 2100, x: 1650, y: 542, t: 9 }, { w: 50, h: 2100, x: 2413, y: 57, t: 9 }, { w: 100, h: 2100, x: 2834, y: 542, t: 9 }, { w: 200, h: 50, x: 2538, y: 125, t: 4 }, { x: 2093, y: 1604, t: 8, w: 320, h: 40 }, { x: 1699, y: 1600, t: 8, w: 160, h: 40 }, { x: 2253, y: 1217, t: 8, w: 160, h: 40 }, { x: 1700, y: 1216, t: 8, w: 320, h: 40 }, { x: 1700, y: 844, t: 8, w: 160, h: 40 }, { x: 2093, y: 846, t: 8, w: 320, h: 40 }, { x: 2254, y: 503, t: 8, w: 160, h: 40 }, { x: 1649, y: 504, t: 8, w: 320, h: 40 }, { x: 2253, y: 2000, t: 8, w: 160, h: 40 }, { x: 1701, y: 1998, t: 8, w: 320, h: 40 }, { w: 20, h: 400, x: 2465, y: 432, t: 10 }, { w: 20, h: 400, x: 2809, y: 1049, t: 11 }, { w: 40, h: 400, x: 2794, y: 2115, t: 13 }, { w: 20, h: 400, x: 2464, y: 1734, t: 10 }, { x: 1700, y: 2383, t: 8, w: 160, h: 40 }, { w: 40, h: 200, x: 1846, y: 2430, t: 12 }, { x: 1651, y: 2642, t: 2, w: 1280, h: 40 }]
      },
      {
            p: { x: 600, y: 710 },
            b: [{ x: 1, y: 932, t: 8, w: 2560, h: 40 }, { w: 40, h: 800, x: 1247, y: 132, t: 13 }, { w: 100, h: 50, x: 1289, y: 815, t: 4 }, { w: 40, h: 800, x: 1394, y: 129, t: 12 }, { x: 179, y: 668, t: 0, w: 160, h: 40 }, { w: 100, h: 1050, x: -3, y: -118, t: 9 }, { w: 100, h: 1050, x: 2458, y: -118, t: 9 }, { x: 527, y: 446, t: 2, w: 160, h: 40 }, { x: 2196, y: 677, t: 0, w: 160, h: 40 }, { x: 911, y: 211, t: 3, w: 160, h: 40 }, { x: 1889, y: 446, t: 2, w: 160, h: 40 }, { x: 1631, y: 204, t: 3, w: 160, h: 40 }]
      },
      {
            p: { x: 600, y: 710 },
            b: [{ x: 2308, y: 234, t: 8, w: 320, h: 40 }, { x: 470, y: 503, t: 8, w: 320, h: 40 }, { x: -1, y: 790, t: 8, w: 2560, h: 40 }, { x: 580, y: 217, t: 0, w: 80, h: 40 }, { x: 272, y: 502, t: 0, w: 80, h: 40 }, { x: 1031, y: 642, t: 0, w: 80, h: 40 }, { x: 1374, y: 505, t: 0, w: 80, h: 40 }, { x: 1783, y: 506, t: 0, w: 80, h: 40 }, { w: 100, h: 262.5, x: 1774, y: 526, t: 9 }, { x: 2190, y: 501, t: 0, w: 160, h: 40 }, { x: 2771, y: 234, t: 8, w: 160, h: 40 }, { x: 3103, y: 495, t: 0, w: 160, h: 40 }, { x: 2863, y: 499, t: 8, w: 80, h: 40 }, { x: 3464, y: 497, t: 0, w: 40, h: 40 }, { x: 3729, y: 496, t: 0, w: 40, h: 40 }, { x: 3595, y: 497, t: 0, w: 40, h: 40 }, { x: 3590, y: 231, t: 0, w: 40, h: 40 }, { x: 4503, y: 243, t: 0, w: 160, h: 40 }, { x: 4009, y: 503, t: 0, w: 80, h: 40 }, { x: 4549, y: 496, t: 8, w: 80, h: 40 }, { x: 4172, y: 245, t: 8, w: 160, h: 40 }, { x: 5630, y: 646, t: 0, w: 80, h: 40 }, { x: 6399, y: 646, t: 0, w: 80, h: 40 }, { w: 100, h: 131.25, x: 5619, y: 666, t: 9 }, { w: 100, h: 131.25, x: 6391, y: 666, t: 9 }, { x: 5888, y: 486, t: 0, w: 320, h: 40 }, { x: 5180, y: 673, t: 0, w: 160, h: 40 }, { x: 5102, y: 714, t: 0, w: 80, h: 40 }, { x: 5180, y: 713, t: 0, w: 160, h: 40 }, { x: 5022, y: 754, t: 0, w: 320, h: 40 }, { x: 5260, y: 633, t: 0, w: 80, h: 40 }, { w: 100, h: 50, x: 7315, y: 277, t: 4 }, { w: 25, h: 525, x: 7414, y: 273, t: 9 }, { x: 6907, y: 716, t: 0, w: 80, h: 40 }, { x: 6987, y: 716, t: 0, w: 160, h: 40 }, { x: 6827, y: 756, t: 0, w: 320, h: 40 }, { x: 6987, y: 676, t: 0, w: 160, h: 40 }, { x: 7067, y: 637, t: 0, w: 80, h: 40 }, { w: 100, h: 262.5, x: 1366, y: 527, t: 9 }, { w: 100, h: 131.25, x: 1023, y: 658, t: 9 }]
      }


]

//stopper is floor, delete floor, right wall and left wall - change to wall graber
$.blocks = { 0: { id: 0, name: "bounce" }, 1: { id: 1, name: "stick" }, 2: { id: 2, name: "ice" }, 3: { id: 3, name: "sliderBounce" }, 4: { id: 4, name: "finish" }, 8: { id: 8, name: "stopper" }, 9: { id: 9, name: "theWall" }, 10: { id: 10, name: "left wall stick" }, 11: { id: 11, name: "right wall stick" }, 12: { id: 12, name: "left bounce" }, 13: { id: 13, name: "right bounce" } };

$.blockBehaviors = [
      {
            style: "base tramp", ontouch: function () {
                  if ($.myplayer.velocityY <= 0) { $.myplayer.velocityY = 30; $.myplayer.addAnim('bounce'); $.playSound($.sounds['bounce1']); }
            }
      },
      { w: 800, h: 200, ontouch: function () { if ($.key.right || $.key.left) { $.myplayer.velocityY = .5; $.myplayer.velocityX *= 1.02; $.myplayer.addAnim('grab'); } } },
      {
            style: "base ice",
            ontouch: function () {
                  if ($.myplayer.velocityY != 0) {
                        $.playSound($.sounds['bounce3']);
                        $.myplayer.addAnim('flatten');

                  }; if ($.myplayer.velocityY <= 0 && $.myplayer.y + ($.myplayer.h / 2) < this.y) {

                        $.myplayer.velocityX *= .99;
                        $.myplayer.velocityY = $.myplayer.weight;
                        $.myplayer.y = this.y - $.myplayer.h;
                  } else { $.myplayer.velocityY = -10; }
            }
      },
      { style: "base tramp", init: function () { tween.to(this, { x: this.x + 100 }, 90, 1000); }, ontouch: function () { if ($.myplayer.velocityY <= 0) { $.myplayer.velocityY = 30; $.playSound($.sounds['bounce1']); $.myplayer.addAnim('bounce'); } } },
      { style: "cube finish", w: 200, h: 50, ontouch: function () { if ($.myplayer.weight > 0) { $.myplayer.success(); $.playSound($.sounds['bounce']); $.playSound($.sounds['bounce1']); $.playSound($.sounds['bounce2']); $.playSound($.sounds['bounce3']); $.key.space = 0; $.myplayer.velocityY = 0; $.myplayer.velocityX = 0; $.myplayer.weight = 0; } } },
      {},
      {},
      {},
      {
            style: "base floor", ontouch: function () {
                  if ($.myplayer.velocityY != 0) {
                        $.myplayer.addAnim('flatten');
                        $.playSound($.sounds['bounce2']);

                  }; if ($.myplayer.velocityY <= 0 && $.myplayer.y + ($.myplayer.h / 2) < this.y) {

                        $.myplayer.velocityX *= .9;

                        $.myplayer.velocityY = $.myplayer.weight;
                        $.myplayer.y = this.y - $.myplayer.h;
                  } else { $.myplayer.velocityY = -10; }
            }
      },
      {
            style: "base wall",
            add: function () { $.myplayer.velocityY = 0; },
            w: 100, h: 2100,
            ontouch: function () {
                  if ($.myplayer.x < this.x) {
                        $.myplayer.velocityX = -1;
                  }
                  else {
                        $.myplayer.velocityX = 1;
                  }
                  $.playSound($.sounds['bounce4']);
            }
      },
      { w: 20, h: 200, add: function () { $.myplayer.velocityX += 10; }, ontouch: function () { $.myplayer.addAnim('grabL'); $.myplayer.velocityY = -1; $.myplayer.velocityX = 0; $.myplayer.x = this.x + this.w; } },
      { w: 20, h: 200, add: function () { $.myplayer.velocityX -= 10; }, ontouch: function () { $.myplayer.addAnim('grab'); $.myplayer.velocityY = -1; $.myplayer.velocityX = 0; $.myplayer.x = this.x - $.myplayer.w; } },


      {
            w: 40, h: 200,
            style: "base Ltramp", ontouch: function () {
                  $.myplayer.velocityX = 30; $.myplayer.velocityY += 10; $.playSound($.sounds['bounce2']); $.myplayer.addAnim('bounce');
            }

      },
      {
            w: 40, h: 200,
            style: "base Rtramp", ontouch: function () {
                  $.myplayer.velocityX = -30; $.myplayer.velocityY += 10; $.playSound($.sounds['bounce2']); $.myplayer.addAnim('bounce');
            }

      }
]


$.tutorial = [
      ["Madness.", "Quickly return me, a semicolon, to the braketed finish.", "The faster you are, the more notoriety you'll receive!", $.ios ? "Use the left half of the screen to move left or right" : "Left and right arrows make me move.", $.ios ? "Use the right half of the screen to jump" : "Space makes me jump and enter restarts me.", "Let's go! Time's a wasting up there!"],//level 0
      ["This time we have bounce strips.", "Hurry! Jump on them and find the bracketed finish."], //level 1
      ["Floating ground, hmm?", "I can't jump through these.", "And those blue ones look slippery."], //level 1
      ["Padded walls?! Do I look looney?", "Maybe I can climb them?"],
      ["What's that red wall up there?", $.ios ? "Use the left half of the screen" : "Press left or right on the arrow keys,", "and I can slide on it."],
      ["Sideways bouncy strips...", "Looks like a bouncy house.", "Let's see what these can do!"]
]

var sonantx;
(function() {
"use strict";
sonantx = {};

var WAVE_SPS = 44100;                    // Samples per second
var WAVE_CHAN = 2;                       // Channels
var MAX_TIME = 33; // maximum time, in millis, that the generator can use consecutively

var audioCtx = null;

// Oscillators
function osc_sin(value)
{
    return Math.sin(value * 6.283184);
}

function osc_square(value)
{
    if(osc_sin(value) < 0) return -1;
    return 1;
}

function osc_saw(value)
{
    return (value % 1) - 0.5;
}

function osc_tri(value)
{
    var v2 = (value % 1) * 4;
    if(v2 < 2) return v2 - 1;
    return 3 - v2;
}

// Array of oscillator functions
var oscillators =
[
    osc_sin,
    osc_square,
    osc_saw,
    osc_tri
];

function getnotefreq(n)
{
    return 0.00390625 * Math.pow(1.059463094, n - 128);
}

function genBuffer(waveSize, callBack) {
    setTimeout(function() {
        // Create the channel work buffer
        var buf = new Uint8Array(waveSize * WAVE_CHAN * 2);
        var b = buf.length - 2;
        var iterate = function() {
            var begin = new Date();
            var count = 0;
            while(b >= 0)
            {
                buf[b] = 0;
                buf[b + 1] = 128;
                b -= 2;
                count += 1;
                if (count % 1000 === 0 && (new Date() - begin) > MAX_TIME) {
                    setTimeout(iterate, 0);
                    return;
                }
            }
            setTimeout(function() {callBack(buf);}, 0);
        };
        setTimeout(iterate, 0);
    }, 0);
}

function applyDelay(chnBuf, waveSamples, instr, rowLen, callBack) {
    var p1 = (instr.fx_delay_time * rowLen) >> 1;
    var t1 = instr.fx_delay_amt / 255;

    var n1 = 0;
    var iterate = function() {
        var beginning = new Date();
        var count = 0;
        while(n1 < waveSamples - p1)
        {
            var b1 = 4 * n1;
            var l = 4 * (n1 + p1);

            // Left channel = left + right[-p1] * t1
            var x1 = chnBuf[l] + (chnBuf[l+1] << 8) +
                (chnBuf[b1+2] + (chnBuf[b1+3] << 8) - 32768) * t1;
            chnBuf[l] = x1 & 255;
            chnBuf[l+1] = (x1 >> 8) & 255;

            // Right channel = right + left[-p1] * t1
            x1 = chnBuf[l+2] + (chnBuf[l+3] << 8) +
                (chnBuf[b1] + (chnBuf[b1+1] << 8) - 32768) * t1;
            chnBuf[l+2] = x1 & 255;
            chnBuf[l+3] = (x1 >> 8) & 255;
            ++n1;
            count += 1;
            if (count % 1000 === 0 && (new Date() - beginning) > MAX_TIME) {
                setTimeout(iterate, 0);
                return;
            }
        }
        setTimeout(callBack, 0);
    };
    setTimeout(iterate, 0);
}

sonantx.AudioGenerator = function(mixBuf) {
    this.mixBuf = mixBuf;
    this.waveSize = mixBuf.length / WAVE_CHAN / 2;
};
sonantx.AudioGenerator.prototype.getWave = function() {
    var mixBuf = this.mixBuf;
    var waveSize = this.waveSize;
    // Local variables
    var b, k, x, wave, l1, l2, s, y;

    // Turn critical object properties into local variables (performance)
    var waveBytes = waveSize * WAVE_CHAN * 2;

    // Convert to a WAVE file (in a binary string)
    l1 = waveBytes - 8;
    l2 = l1 - 36;
    wave = String.fromCharCode(82,73,70,70,
                               l1 & 255,(l1 >> 8) & 255,(l1 >> 16) & 255,(l1 >> 24) & 255,
                               87,65,86,69,102,109,116,32,16,0,0,0,1,0,2,0,
                               68,172,0,0,16,177,2,0,4,0,16,0,100,97,116,97,
                               l2 & 255,(l2 >> 8) & 255,(l2 >> 16) & 255,(l2 >> 24) & 255);
    b = 0;
    while(b < waveBytes)
    {
        // This is a GC & speed trick: don't add one char at a time - batch up
        // larger partial strings
        x = "";
        for (k = 0; k < 256 && b < waveBytes; ++k, b += 2)
        {
            // Note: We amplify and clamp here
            y = 4 * (mixBuf[b] + (mixBuf[b+1] << 8) - 32768);
            y = y < -32768 ? -32768 : (y > 32767 ? 32767 : y);
            x += String.fromCharCode(y & 255, (y >> 8) & 255);
        }
        wave += x;
    }
    return wave;
};
sonantx.AudioGenerator.prototype.getAudio = function() {
    var wave = this.getWave();
    var a = new Audio("data:audio/wav;base64," + btoa(wave));
    a.preload = "none";
    a.load();
    return a;
};
sonantx.AudioGenerator.prototype.getAudioBuffer = function(callBack) {
    if (audioCtx === null)
        audioCtx = new AudioContext();
    var mixBuf = this.mixBuf;
    var waveSize = this.waveSize;

    var buffer = audioCtx.createBuffer(WAVE_CHAN, this.waveSize, WAVE_SPS); // Create Mono Source Buffer from Raw Binary
    var lchan = buffer.getChannelData(0);
    var rchan = buffer.getChannelData(1);
    var b = 0;
    var iterate = function() {
        var beginning = new Date();
        var count = 0;
        while (b < waveSize) {
            var y = 4 * (mixBuf[b * 4] + (mixBuf[(b * 4) + 1] << 8) - 32768);
            y = y < -32768 ? -32768 : (y > 32767 ? 32767 : y);
            lchan[b] = y / 32768;
            y = 4 * (mixBuf[(b * 4) + 2] + (mixBuf[(b * 4) + 3] << 8) - 32768);
            y = y < -32768 ? -32768 : (y > 32767 ? 32767 : y);
            rchan[b] = y / 32768;
            b += 1;
            count += 1;
            if (count % 1000 === 0 && new Date() - beginning > MAX_TIME) {
                setTimeout(iterate, 0);
                return;
            }
        }
        setTimeout(function() {callBack(buffer);}, 0);
    };
    setTimeout(iterate, 0);
};

sonantx.SoundGenerator = function(instr, rowLen) {
    this.instr = instr;
    this.rowLen = rowLen || 5605;

    this.osc_lfo = oscillators[instr.lfo_waveform];
    this.osc1 = oscillators[instr.osc1_waveform];
    this.osc2 = oscillators[instr.osc2_waveform];
    this.attack = instr.env_attack;
    this.sustain = instr.env_sustain;
    this.release = instr.env_release;
    this.panFreq = Math.pow(2, instr.fx_pan_freq - 8) / this.rowLen;
    this.lfoFreq = Math.pow(2, instr.lfo_freq - 8) / this.rowLen;
};
sonantx.SoundGenerator.prototype.genSound = function(n, chnBuf, currentpos) {
    var marker = new Date();
    var c1 = 0;
    var c2 = 0;

    // Precalculate frequencues
    var o1t = getnotefreq(n + (this.instr.osc1_oct - 8) * 12 + this.instr.osc1_det) * (1 + 0.0008 * this.instr.osc1_detune);
    var o2t = getnotefreq(n + (this.instr.osc2_oct - 8) * 12 + this.instr.osc2_det) * (1 + 0.0008 * this.instr.osc2_detune);

    // State variable init
    var q = this.instr.fx_resonance / 255;
    var low = 0;
    var band = 0;
    for (var j = this.attack + this.sustain + this.release - 1; j >= 0; --j)
    {
        var k = j + currentpos;

        // LFO
        var lfor = this.osc_lfo(k * this.lfoFreq) * this.instr.lfo_amt / 512 + 0.5;

        // Envelope
        var e = 1;
        if(j < this.attack)
            e = j / this.attack;
        else if(j >= this.attack + this.sustain)
            e -= (j - this.attack - this.sustain) / this.release;

        // Oscillator 1
        var t = o1t;
        if(this.instr.lfo_osc1_freq) t += lfor;
        if(this.instr.osc1_xenv) t *= e * e;
        c1 += t;
        var rsample = this.osc1(c1) * this.instr.osc1_vol;

        // Oscillator 2
        t = o2t;
        if(this.instr.osc2_xenv) t *= e * e;
        c2 += t;
        rsample += this.osc2(c2) * this.instr.osc2_vol;

        // Noise oscillator
        if(this.instr.noise_fader) rsample += (2*Math.random()-1) * this.instr.noise_fader * e;

        rsample *= e / 255;

        // State variable filter
        var f = this.instr.fx_freq;
        if(this.instr.lfo_fx_freq) f *= lfor;
        f = 1.5 * Math.sin(f * 3.141592 / WAVE_SPS);
        low += f * band;
        var high = q * (rsample - band) - low;
        band += f * high;
        switch(this.instr.fx_filter)
        {
            case 1: // Hipass
                rsample = high;
                break;
            case 2: // Lopass
                rsample = low;
                break;
            case 3: // Bandpass
                rsample = band;
                break;
            case 4: // Notch
                rsample = low + high;
                break;
            default:
        }

        // Panning & master volume
        t = osc_sin(k * this.panFreq) * this.instr.fx_pan_amt / 512 + 0.5;
        rsample *= 39 * this.instr.env_master;

        // Add to 16-bit channel buffer
        k = k * 4;
        if (k + 3 < chnBuf.length) {
            var x = chnBuf[k] + (chnBuf[k+1] << 8) + rsample * (1 - t);
            chnBuf[k] = x & 255;
            chnBuf[k+1] = (x >> 8) & 255;
            x = chnBuf[k+2] + (chnBuf[k+3] << 8) + rsample * t;
            chnBuf[k+2] = x & 255;
            chnBuf[k+3] = (x >> 8) & 255;
        }
    }
};
sonantx.SoundGenerator.prototype.getAudioGenerator = function(n, callBack) {
    var bufferSize = (this.attack + this.sustain + this.release - 1) + (32 * this.rowLen);
    var self = this;
    genBuffer(bufferSize, function(buffer) {
        self.genSound(n, buffer, 0);
        applyDelay(buffer, bufferSize, self.instr, self.rowLen, function() {
            callBack(new sonantx.AudioGenerator(buffer));
        });
    });
};
sonantx.SoundGenerator.prototype.createAudio = function(n, callBack) {
    this.getAudioGenerator(n, function(ag) {
        callBack(ag.getAudio());
    });
};
sonantx.SoundGenerator.prototype.createAudioBuffer = function(n, callBack) {
    this.getAudioGenerator(n, function(ag) {
        ag.getAudioBuffer(callBack);
    });
};

sonantx.MusicGenerator = function(song) {
    this.song = song;
    // Wave data configuration
    this.waveSize = WAVE_SPS * song.songLen; // Total song size (in samples)
};
sonantx.MusicGenerator.prototype.generateTrack = function (instr, mixBuf, callBack) {
    var self = this;
    genBuffer(this.waveSize, function(chnBuf) {
        // Preload/precalc some properties/expressions (for improved performance)
        var waveSamples = self.waveSize,
            waveBytes = self.waveSize * WAVE_CHAN * 2,
            rowLen = self.song.rowLen,
            endPattern = self.song.endPattern,
            soundGen = new sonantx.SoundGenerator(instr, rowLen);

        var currentpos = 0;
        var p = 0;
        var row = 0;
        var recordSounds = function() {
            var beginning = new Date();
            while (true) {
                if (row === 32) {
                    row = 0;
                    p += 1;
                    continue;
                }
                if (p === endPattern - 1) {
                    setTimeout(delay, 0);
                    return;
                }
                var cp = instr.p[p];
                if (cp) {
                    var n = instr.c[cp - 1].n[row];
                    if (n) {
                        soundGen.genSound(n, chnBuf, currentpos);
                    }
                }
                currentpos += rowLen;
                row += 1;
                if (new Date() - beginning > MAX_TIME) {
                    setTimeout(recordSounds, 0);
                    return;
                }
            }
        };

        var delay = function() {
            applyDelay(chnBuf, waveSamples, instr, rowLen, finalize);
        };

        var b2 = 0;
        var finalize = function() {
            var beginning = new Date();
            var count = 0;
            // Add to mix buffer
            while(b2 < waveBytes)
            {
                var x2 = mixBuf[b2] + (mixBuf[b2+1] << 8) + chnBuf[b2] + (chnBuf[b2+1] << 8) - 32768;
                mixBuf[b2] = x2 & 255;
                mixBuf[b2+1] = (x2 >> 8) & 255;
                b2 += 2;
                count += 1;
                if (count % 1000 === 0 && (new Date() - beginning) > MAX_TIME) {
                    setTimeout(finalize, 0);
                    return;
                }
            }
            setTimeout(callBack, 0);
        };
        setTimeout(recordSounds, 0);
    });
};
sonantx.MusicGenerator.prototype.getAudioGenerator = function(callBack) {
    var self = this;
    genBuffer(this.waveSize, function(mixBuf) {
        var t = 0;
        var recu = function() {
            if (t < self.song.songData.length) {
                t += 1;
                self.generateTrack(self.song.songData[t - 1], mixBuf, recu);
            } else {
                callBack(new sonantx.AudioGenerator(mixBuf));
            }
        };
        recu();
    });
};
sonantx.MusicGenerator.prototype.createAudio = function(callBack) {
    this.getAudioGenerator(function(ag) {
        callBack(ag.getAudio());
    });
};
sonantx.MusicGenerator.prototype.createAudioBuffer = function(callBack) {
    this.getAudioGenerator(function(ag) {
        ag.getAudioBuffer(callBack);
    });
};

})();


var tween = (function () {

    function tweenTo(_object, _element, _duration, _repeat) {
        var count = 0;
        var ele = {};
        var org = {};
        var diff = _element.x - _object.x;
        for (ob in _element) {
            ele[ob] = (_element[ob] - _object[ob]) / _duration; 
            org[ob] =  (_element[ob] - _object[ob]);
        }

        requestAnimationFrame(tween);

        function tween() {
            var cont = false;
            for (ob in ele) {
                var test =(ele[ob] > 0 && _object[ob] < _element[ob]) ;
                if ((ele[ob] > 0 && _object[ob] < _element[ob]) || (ele[ob] < 0 && _object[ob] > _element[ob] )) {
                    _object[ob] += ele[ob];
                    cont = true;
                }

            }
            if (!cont && _repeat > count) {
                for (ob in ele) {
                    org[ob] *= -1;
                    _element[ob] += org[ob];
                    ele[ob] *= -1;
                }
                cont = true;
                count++;
            }

            if (cont) { requestAnimationFrame(tween); }

        }
    }

    return {
        to: function (_object, _element, _duration, _repeat) {
            tweenTo(_object, _element, _duration, _repeat);
        }
    };
})();
"use strict";

$.util = {};

window.requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();


$.gameLoad = function () {
  this.data = {};
  this.data.scores = [];
  this.data.user = "default user";

  var opt = JSON.parse(localStorage.getItem(location.pathname));
  if (opt == null) {
    localStorage.setItem(location.pathname, JSON.stringify(this.data));
  }
  else {
    this.data.scores = opt.scores;
    this.data.user = opt.user;
  }

  this.saveUser = function (name) {
    this.data.user = name;
    localStorage.setItem(location.pathname, JSON.stringify(this.data));
  }

  this.saveScore = function (level, scores) {
    if (this.data.scores.length <= level) {
      this.data.scores.push([]);
    }
    this.data.scores[level].push({ n: this.data.user, s: Number(scores) });
    this.data.scores[level] = this.data.scores[level].sort(function (a, b) {
      if (a.s > b.s) {
        return 1;
      }
      if (a.s < b.s) {
        return -1;
      }
      return 0;
    });
    this.data.scores[level].splice(5, this.data.scores[level].length);  //only store top 5
    localStorage.setItem(location.pathname, JSON.stringify(this.data));
  }

};



$.util.rectInRect = function (r1, r2) {
  return !(r2.x > r1.x + r1.w ||
    r2.x + r2.w < r1.x ||
    r2.y > r1.y + r1.h ||
    r2.y + r2.h < r1.y);
};

$.util.range = function (n, r) {
  if (n < 0) {
    return Math.max(n, -r);
  }
  else if (n > 0) {
    return Math.min(n, r);
  }
}

$.util.popChat = function (_x, _y, _text, _c) {

  var textEl = document.createElement('div');
  textEl.classList.add(_c || 'ani', 'note'); // could add animation option for diff behavior.

  var current = 0;
  setLocation(_text[current].length);
  textEl.innerText = _text[current];

  textEl.addEventListener("animationend", AnimationEnded, false);

  document.body.appendChild(textEl);

  function setLocation(textLength) {
    var x = textLength < 20 ? (textLength * 15) / 4 : 80; //100 is max width of box, 10 is text size
    var y = 15 + Math.ceil(textLength * .1) * 7; //100 is max width of box, 10 is text size
    textEl.style.left = (_x - x) + "px";
    textEl.style.top = (_y - y) + "px";
  }

  function AnimationEnded() {
    if (current < _text.length - 1) {
      current++;
      setLocation(_text[current].length);
      textEl.innerText = _text[current];;
      textEl.classList.remove(_c || 'ani');
      void textEl.offsetWidth;
      textEl.classList.add(_c || 'ani');
    } else {
      document.body.removeChild(textEl);
    }
  }
}

$.block = function (opt) {
    for (var e in $.blockBehaviors[$.blocks[opt.t].id]) {
        this[e] = $.blockBehaviors[$.blocks[opt.t].id][e];
    }
    for (var e in opt) {  //level defs will over right defaults in block behaviors
        this[e] = opt[e];
    }

    this.add = this.add || function () { };
    this.style = this.style || "cube";
    this.init = this.init || function () { };
    this.x = this.x || 100;
    this.y = this.y || 100;

    this.w = this.w || 160;
    this.h = this.h || 40;

    var htmlOBJ = document.createElement('div');
    var container = document.getElementById('blockContainer');

    var status = true;
    htmlOBJ.className = this.style;

    this.init();
    htmlOBJ.style.width = this.w + 'px';
    htmlOBJ.style.height = this.h + 'px';
    if(opt.t==4){
        htmlOBJ.innerHTML = "<div class='func lFunc'>{</div><div class='func rFunc'>}</div>";
    }
    container.appendChild(htmlOBJ);


    this.transition = function(){
        htmlOBJ.style.transition = "all 0s";
    }

    this.kill = function () {
       container.removeChild(htmlOBJ);
    }

    this.render = function () {
       
        htmlOBJ.style.transform = "translate(" + ($.offset.x + this.x) + "px," + ($.offset.y + this.y) + "px)";
    }
}

$.ghost = function (_p, _x, _y) {
    var htmlOBJ = document.getElementById("ghost");
    this.x = _x || 350;
    this.y = _y || 650;
    var currFrame = 0;
    var path = _p || [];
    var index = 0;
   // path.splice(0, 1);

    if (path.length == 0) {
        htmlOBJ.style.display = "none";
    }
    else {
        htmlOBJ.style.display = "block";
    }

    this.update = function () {
        currFrame += 1;
        if (path.length > index) {

            if (path[index].f == currFrame) {
                this.x -= path[index].x;
                this.y -= path[index].y;
                index += 1;
            }
        }
    }

    this.render = function () {
        htmlOBJ.style.transform = "translate(" + ($.offset.x + this.x) + "px," + ($.offset.y + this.y) + "px)";
    }
}

$.player = function () {
    this.htmlOBJ = document.getElementById("bob");
    this.eyelOBJ = document.getElementById("eyeLeft");
    this.eyerOBJ = document.getElementById("eyeRight");
    this.bodyOBJ = document.getElementById("bobody");
    this.x = 600;
    this.y = 710;
    this.weight = 1;

    this.velocityY = 0;
    this.velocityX = 0;

    this.latMovement = 1;//5;

    this.maxJumpHeight = 30;
    this.w = 30;
    this.h = 80;
    this.gravity = -15;

    this.lastJump = 0;
    this.currjump = 0;

    this.lastVX = 0;

    this.status = true;
    this.htmlOBJ.style.left = $.W / 2 + "px";
    this.htmlOBJ.style.top = $.H / 2.5 + "px";
}


$.player.prototype.reset = function () {
    this.weight = 1;
    this.velocityY = 0;
    this.velocityX = 0;
    this.eyelOBJ.style.left = "7px";
    this.eyerOBJ.style.left = "23px";
    this.htmlOBJ.style.transform = "rotate(0deg) rotateY(0deg)";

    this.status = true;
}

$.player.prototype.jump = function () {
    this.velocityY = this.maxJumpHeight;
    $.playSound($.sounds['jump']);
}

$.player.prototype.moveLeft = function () {
    if (this.velocityX > -7) {
        this.velocityX -= this.latMovement;
    }
}


$.player.prototype.moveRight = function () {
    if (this.velocityX < 7) {
        this.velocityX += this.latMovement;
    }

}

$.player.prototype.checkCollision = function (objs) {
    var _objs = [];
    var i = objs.length; while (i--) {
        if ($.util.rectInRect(this, objs[i])) {
            _objs.push({ hit: true, e: objs[i] });
        }
    }
    return _objs;
}

$.player.prototype.addAnim = function (type) {
    if (type && type != "success") {
        if (type.substring(0, 4) == "walk" && this.bodyOBJ.className == type) { return; }
        this.bodyOBJ.className = "";
        void this.bodyOBJ.offsetWidth;
        if (type) { this.bodyOBJ.classList.add(type) };
    }
    else {
        this.htmlOBJ.className = "";
        void this.htmlOBJ.offsetWidth;
        if (type) { this.htmlOBJ.classList.add(type) };
    }

}

$.player.prototype.success = function () {
    this.status = false;
    this.addAnim('success');
    $.state.nextLevel();
    $.util.popChat(window.innerWidth / 2, ($.H / 2.5)-25, ["YAHOO!"]);

    this.htmlOBJ.addEventListener("animationend", AnimationEnded, false);
    function AnimationEnded(e) {
        if (e.animationName == "success") {
          //  $.state.destroy();
            $.state.showSelecter();
            e.currentTarget.removeEventListener("animationend", AnimationEnded, false);
        }

    }
}

$.player.prototype.update = function (objs) {
    if (!this.status) { return };

    this.lastJump = this.currjump;
    this.currjump = $.key.space;
    var doJump = (this.lastJump === 0 & this.currjump === 1) ? true : false;

    if ($.key.left) {
        this.moveLeft();
    }
    else if ($.key.right) {
        this.moveRight();
    }


    var collide = this.checkCollision(objs);

    var i = collide.length; while (i--) {
        if (collide[i].hit) {

            collide[i].e.ontouch();
            if (doJump) {
                this.jump();
                this.addAnim('bounce');
                collide[i].e.add();
            }


        }
    }

    if (this.velocityY > this.gravity) {//-15 is limit of drop speed  && !collide.hit
        this.velocityY -= this.weight;

    }
    if (this.lastVX != this.velocityX.toFixed(1)) {
        // mostly animating the character here//////
        if (this.velocityY >= 0 && this.velocityY <= 1) {
            if (this.velocityX < 1.5 && this.velocityX > -1.5) {
                ///remove walk if not moving and not in the air
                if (this.bodyOBJ.className.substring(0, 4) == "walk") { this.bodyOBJ.className = "" };
            }
            else if (this.velocityX < 0) {
                //do walk left if moving and not in the air
                $.myplayer.addAnim('walk');
            }
            else if (this.velocityX > 0) {
                //do walk right if moving and not in the air
                $.myplayer.addAnim('walkR');
            }
        }

        this.eyelOBJ.style.left = (7 + (this.velocityX.toFixed(2) / 2)) + "px";
        this.eyerOBJ.style.left = (23 + (this.velocityX.toFixed(2) / 2)) + "px";
        this.htmlOBJ.style.transform = "rotate(" + $.util.range(this.velocityX.toFixed(1) * 2, 21) + "deg) rotateY(" + $.util.range(this.velocityX.toFixed(1) * 6, 40) + "deg)";
    }
    this.lastVX = this.velocityX.toFixed(1);
    ///////////////////////////////////////////////////
    this.y -= this.velocityY;
    this.x += this.velocityX;
}
$.play = function (l) {
    var customContainer = document.getElementById('my-gui-container');
    var timer = "0.00";//document.getElementById('timer');

    var selecter = new $.select();

    $.myplayer = new $.player();

    var currentLevel = l || 0;
    this.path = [];

    var lastMove = { x: 0, y: 0 };

    //  $.offset = { x: -($.myplayer.x - ($.W) / 2), y: -($.myplayer.y - ($.H / 2.5)) };

    var status = false;
    var currFrame = 0;
    var blocks = [];
    var song;
    var ghost;
  //  var coderEnemy = new $.coder().render();

    this.init = function () {
        selecter.init();
    }

    this.buildLevel = function (_i, _g) {
        /////build level////////
        this.destroy();
        var l = _i;
        currentLevel = l;
        var levelInfo = $.level[l].b;
        for (var i = 0; i < levelInfo.length; i++) {
            blocks.push(new $.block(levelInfo[i]));
        }
        $.myplayer.x = $.level[l].p.x;//add this to reset?
        $.myplayer.y = $.level[l].p.y;//add this to reset?
        /////////////////////////////////
        $.myplayer.reset();

        $.offset = { x: (($.W / 2) - $.myplayer.x), y: (($.H / 2.5) - $.myplayer.y) };

    }

    this.start = function (l) {
        for (var i = 0; i < blocks.length; i++) {
            blocks[i].transition();

        }
        $.elapsed = 0;
        currFrame = 0;

        status = true;

       // song = $.playSound($.songs['a'], true);

        //build play menu///////   if (song) { song.stop(); }
        customContainer.innerHTML = "";
        var pause = document.createElement('div');
        pause.innerText = "||";
        pause.addEventListener('click', function () {
            $.myplayer.addAnim(); $.state.clearTuts();
            status = false; customContainer.innerHTML = ""; $.state.showSelecter();
        });
        customContainer.appendChild(pause);
        //////////////////////////////

        //start tutorial if needed////////////////
        if ($.tutorial.length > l) {
            $.util.popChat(window.innerWidth / 2, ($.H / 2.5)-25, $.tutorial[l], 'tut');
        }
        ///////////////////////////////////////

        ghost = new $.ghost(selecter.ghost(), $.myplayer.x, $.myplayer.y);

    }

    this.showSelecter = function () {
        selecter = new $.select(Math.min(currentLevel, $.level.length - 1));
        selecter.init();
    }


    this.destroy = function () {
        status = false;
        for (var i = 0; i < blocks.length; i++) {
            blocks[i].kill();

        }
        blocks = [];
        this.path = [];

        this.clearTuts();

        customContainer.innerHTML = "";

       // if (song) { song.stop(); }

    }

    this.clearTuts = function () {
        var removeNotes = document.getElementsByClassName("note tut");
        i = removeNotes.length; while (i--) {
            document.body.removeChild(removeNotes[i]);
        };
    }

    this.nextLevel = function () {
        status = false;// stop the timer and updating
        //  if (song) { song.stop(); }

        this.clearTuts();//clear tuts on success

        customContainer.innerHTML = "";//don't allow pausing

        this.path.splice(0, 1);
        $.gameProgress.saveScore(currentLevel, $.elapsed.toFixed(2));
       // $.onlineNewScore(currentLevel, { n: $.gameProgress.data.user||"no name mcgee", s: $.elapsed.toFixed(2) }, this.path);
       // $.socket.emit("new score", { n: $.gameProgress.data.user||"no name mcgee", l: currentLevel, s: $.elapsed.toFixed(2) }, this.path);
        //   this.path = [];

        currentLevel += 1;
    }

    this.status = function () {
        return status;
    }

    this.update = function () {
        if (status) {
            timer = $.elapsed.toFixed(2);
            // $.replaceHTML(document.getElementById('timer'), $.elapsed.toFixed(2));
            //   timer.innerHTML = $.elapsed.toFixed(2);
            $.myplayer.update(blocks);
            currFrame += 1;

            $.offset = { x: (($.W / 2) - $.myplayer.x), y: (($.H / 2.5) - $.myplayer.y) };
               ghost.update();
            if (lastMove && (Math.round(lastMove.x) != Math.round($.offset.x) || Math.round(lastMove.y) != Math.round($.offset.y))) {
                this.path.push({ f: currFrame, x: $.offset.x - lastMove.x, y: $.offset.y - lastMove.y });
            }
            lastMove = $.offset;

            if ($.key.enter) {
                $.state.destroy();
                $.state.buildLevel(currentLevel, selecter.ghost());
                $.state.start(currentLevel);
            }
        }
    }

    this.render = function () {
        if (ghost) { ghost.render(); }
        i = blocks.length; while (i--) { blocks[i].render(); };
        //   coderEnemy.render();
        $.mainctx.fillStyle = "white";
        $.mainctx.font = "50px 'Open Sans', sans-serif";
        $.mainctx.fillText(timer, ($.W / 2)-50 , 50);

    }
    //selecter.init();
}
$.select = function (_l) {
    document.getElementById('game').classList.add("blurMe");

    var customContainer = document.getElementById('overlay');
    var levelNum = _l || Math.min($.gameProgress.data.scores.length, $.level.length - 1);
    var ghostPath = [];

    var levelName = document.createElement('div');

    var mid = document.createElement('div');
    mid.style.position = "relative";
    mid.style.top = "20%";

    levelName.classList.add('bigText');
    levelName.innerText = "Level " + levelNum + " Leaderboard";
    mid.appendChild(levelName);


    var scoreBoardType = "local";

    lB = document.createElement('div');
    lB.classList.add('bigText', 'links');
    lB.innerHTML = "<b>Local</b>";
   // lB.addEventListener('click', function () { if (scoreBoardType == "online") { scoreBoardType = "local"; changeLevel(); } else { scoreBoardType = "online"; changeLevel(); } });
    mid.appendChild(lB);

    var prev = document.createElement('div');
    prev.innerText = "<";
    prev.classList.add('links', 'leftArrow');
    prev.addEventListener('click', function () { if (levelNum > 0) { levelNum--; $.state.buildLevel(levelNum); }; changeLevel(); });
    customContainer.appendChild(prev);


    var Scores = document.createElement('div');
    Scores.classList.add('leader');
    Scores.innerHTML = "";
    mid.appendChild(Scores);

    var Next = document.createElement('div');
    Next.innerText = ">";
    Next.classList.add('links', 'rightArrow');
    Next.addEventListener('click', function () { 
        if (levelNum < $.level.length - 1 && $.gameProgress.data.scores.length > levelNum) { levelNum++; $.state.buildLevel(levelNum); }; changeLevel(); 
    });
    customContainer.appendChild(Next);

    var Play = document.createElement('div');
    Play.classList.add('bigText', 'links');
    Play.innerHTML = "Play";
    Play.addEventListener('click', function () { $.playSound($.sounds['bounce3']); $.playSound($.sounds['bounce2']); document.getElementById('game').classList.remove("blurMe"); customContainer.innerHTML = ""; $.state.start(levelNum); });
    mid.appendChild(Play);

    if (window.AudioContext) {
        var sound = document.createElement('div');
        sound.classList.add('bigText', 'bottomRight', 'links');
        sound.innerText = "Sound: " + ($.mute ? "OFF" : "ON");
        sound.addEventListener('click', function () {
            if (this.innerText == "Sound: OFF") {
                this.innerText = "Sound: ON"; $.mute = 0;
            }
            else { this.innerText = "Sound: OFF"; $.mute = 1; }
        });
        customContainer.appendChild(sound);
    }

    var gl = document.createElement('div');
    gl.classList.add('bigText', 'bottomLeft', 'links');
    gl.innerText = "Glitch: " + ($.glitch ? $.glitch : "OFF");
    gl.addEventListener('click', function () {
        $.glitch += 1;
        if ($.glitch < $.glitchType.length + 1) {
            this.innerText = "Glitch: " + $.glitch;
            document.getElementById('cont').style.animation = $.glitchType[$.glitch - 1] + " 15s infinite alternate-reverse";
        }
        else { this.innerText = "Glitch: OFF"; $.glitch = 0; document.getElementById('cont').style.animation = ""; }
    });
    customContainer.appendChild(gl);

    customContainer.appendChild(mid);


    var buildScoreBoard = function (data) {
        Scores.innerHTML = "";
        for (var i = 0; i < 5; i++) {
            if (data[i]) {
                Scores.innerHTML += "<li><span class='list_num'>" + (i + 1) + "</span><h2>" + data[i].n + "<span class='number'>" + data[i].s + "</span></h2></li>";
            }
            else {
                Scores.innerHTML += "<li><span class='list_num'>" + (i + 1) + "</span><h2>default user<span class='number'>99999.9</span></h2></li>";
            }
        }
    }


    var changeLevel = function () {

        levelName.innerHTML = "Level " + levelNum + " Leaderboard";
        ghostPath = [];

        Scores.innerHTML = "Loading...";

        if (scoreBoardType != "online") {
            lB.innerHTML = "<b>Local</b>";
            buildScoreBoard($.gameProgress.data.scores[levelNum] || []);
        }
    }


    this.init = function () {
        $.state.buildLevel(levelNum);
        changeLevel();
    }

    this.ghost = function () {
        return ghostPath;
    }

}