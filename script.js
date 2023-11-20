function shortcut(s1, s2) {
  // your code here
	let s3=s1.charAt(0);
	let s4=s2.charAt(1);
	
	return s3+s4;
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
