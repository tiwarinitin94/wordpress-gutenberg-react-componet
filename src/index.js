// src/index.js
const { registerBlockType } = wp.blocks;



import * as HeroBox1 from './HeroBox1';
import * as InfoBox1 from './InfoBox1';
import * as MediaBox from './MediaBox';
import * as TextBox1 from './TextBox1';
import * as InfoBox2 from './InfoBox2';
import * as InfoBox3 from './InfoBox3';
import * as InfoBox4 from './InfoBox4';
import * as HeroBox2 from './HeroBox2';
import * as InfoBox5 from './InfoBox5';
import * as ContentBox1 from './ContentBox1';
import * as InfoBox6 from './InfoBox6';
import * as InfoBox7 from './InfoBox7';
import * as InfoBox8 from './InfoBox8';
import * as SliderBox1 from './SliderBox1';
import * as TimeLineBox1 from './TimeLineBox1'
import * as VideoBox1 from './VideoBox1'
import * as QuoteBox1 from './QuoteBox1'
import * as QuoteBox2 from './QuoteBox2'

const blocks = [
    HeroBox1,
    InfoBox1,
    MediaBox,
    TextBox1,
    InfoBox2,
    InfoBox3,
    InfoBox4,
    HeroBox2,
    InfoBox5,
    ContentBox1,
    InfoBox6,
    InfoBox7,
    InfoBox8,
    SliderBox1,
    TimeLineBox1,
    VideoBox1,
    QuoteBox1,
    QuoteBox2,
];


function registerBlock(block) {
    const { name, settings } = block;
    registerBlockType(name, settings);
}

blocks.forEach(registerBlock);
