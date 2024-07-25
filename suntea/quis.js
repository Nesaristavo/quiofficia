function computeSomething(a, b) {
  // Compute ab (for instance, a * b)
  let ab = a * b;

  if (ab === 0) {
    console.log("ab is exactly zero");
  } else if (Math.abs(ab) < 1e-8) {
    console.log("ab is effectively zero");
  } else {
    console.log("ab is not zero");
  }
}

// Example calls
computeSomething(1e-4, 1e-4); // ab is effectively zero
computeSomething(1, 0);       // ab is exactly zero
computeSomething(2, 3);       // ab is not zero
