import EmojiConvertor from 'emoji-js';

const emoji = new EmojiConvertor();

emoji.img_sets.apple.path = 'https://apps.mubaris.com/filmoji/emoji-data/img-apple-64/';

emoji.img_sets.apple.sheet = 'https://apps.mubaris.com/filmoji/emoji-data/sheet_apple_64.png';

const convertToEmoji = (e) => emoji.replace_unified(e);

// const innerHTML = (e) => ({ __html: emoji.replace_unified(e) });

export default convertToEmoji;
