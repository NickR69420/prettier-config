// Using v2 config

const howGood2: Tests2 = {
	false: 'No',
	true: 'Yes',
};

const testPrettier2 = <K extends keyof Tests>(isGood: K): Tests[K] => {
	return howGood[isGood];
};

testPrettier2('true');

interface Tests2 {
	true: 'Yes';
	false: 'No';
}
