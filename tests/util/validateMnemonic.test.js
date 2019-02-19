import bip39 from 'bip39'

let validMnemonics = [
	'blame under draft oyster horn zone that tissue because piano almost icon',
	'message elder dirt indoor jacket word foot kidney become neither fury birth',
	'hurt frog brain put favorite undo jungle sunset describe please inform display',
	'gap stone waste fringe silk special ride topple stage identify fury laundry',
	'elevator whale token dinosaur excuse clock cigar analyst gospel arch price primary',
	'enough bottom town abandon boost lake license end dynamic horse candy coyote',
	'change debris plunge become pass young reward fancy manage lava cradle click',
	'school elevator diamond crystal doctor success egg shine eagle victory skirt dry',
	'among peanut shuffle giggle afford bread trip chapter twenty expose board rescue',
	'zero north tobacco route artefact scheme oak eternal pear lyrics alert surge',
	'dash ostrich pony bracket future donate brush off sample wet ethics liberty',
]

let invalidMnemonics = [
	'ry guy',
	24,
	'figewogewgewg',
	'health whole love god wisdom fountain god me my oh mai sakurakima',
	'white light god is there and loves no one because it loves everyone and therefore does not love',
	'what is life without philosophy what is life without wisdom',
	'even a man who conquers the world but does not conquer himself has failed',
	'it is that type of man who sinks to the depths of tarturus',
	'which kind of man are you what is it you seek what is it you desire',
	'if you say not wisdom than you are a fool',
	'for only a fool lives without wisdom and seeks it not',
	'what is it to you if you gain the world but lose your soul',
	'can you not see the universe can you not see all that is around you',
	'the answer is yes you cannot see what is around you',
	'you can only see what is in front of you',
	'you can only see what your mind is capable of perceiving through the sensory organs',
	'can you see microwaves and gamma rays no you cannot',
	'do they exist nonetheless yes of course how much more then can we not see',
	'we have created scientific instruments that allows us to perceive what we alone cannot',
	'how far can science take us will it take us to the infinite',
	'regardless that fact that it will take us farther states that where it is now is not the end',
	'that there is much that though we cannot prove we cannot deny',
	'live with your eyes wide open',
	'its been a crazy morning',
	'february 19th 2019 1051 military time'
]

it('validate mnemonics', () => {
	for (let mnemonic of validMnemonics) {
		expect(bip39.validateMnemonic(mnemonic)).toBeTruthy()
	}
})

it('invalidate mnemonics', () => {
	for (let mnemonic of invalidMnemonics) {
		expect(bip39.validateMnemonic(mnemonic)).toBeFalsy()
	}
})