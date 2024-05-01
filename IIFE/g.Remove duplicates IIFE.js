function unique(a, fn) {
    if (a.length === 0 || a.length === 1) {
      return a;
    }
    if (!fn) {
      return a;
    }
  
    for (let i = 0; i < a.length; i++) {
      for (let j = i + 1; j < a.length; j++) {
        if (fn(a[i], a[j])) {
          a.splice(i, 1);
        }
      }
    }
    return a;
  }
  
  const members = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 1, name: 'John' },
    { id: 4, name: 'Joe' },
  ];
  
  const uniqueMembers = unique(
    members,
    (a, b) => (a.id === b.id) & (a.name === b.name)
  );
  
  console.log(uniqueMembers);