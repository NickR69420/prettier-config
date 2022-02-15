// Using default config

const howGood: Tests = {
	false: "No",
	true: "Yes",
};

const testPrettier = <K extends keyof Tests>(isGood: K): Tests[K] => {
	return howGood[isGood];
};

testPrettier("true");

interface Tests {
	true: "Yes";
	false: "No";
}
