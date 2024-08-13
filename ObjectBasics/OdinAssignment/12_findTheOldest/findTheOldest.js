const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currentAge = getAge(
            currentPerson.yearOfBirth,
            currentPerson.yearOfDeath
        );

        return oldestAge < currentAge ? currentPerson : oldest;
        /* PENJELASAN (lihat di bawah array of obj people)
        const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970, //28
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011, //49
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941, //29
      },
    ];
        1) karena reduce tidak memiliki parameter kedua
            maka oldest merupakan elemen pertama dari array people(yaitu Carly)
        2) oldestAge adalah umur Carly & current age juga umur Carly
        3) return oldest karena (oldestAge TIDAK < currentAge)
        4) loop ke-2: oldest adalah Carly, currentPerson adalah Ray
        5) oldestAge adalah umur Carly(28) & currrentAge adalah umur Ray(49)
        6) return currentPerson(yaitu Ray) karena (oldestAge < currentAge)
        7) loop ke-3: oldest adalah Ray(karena loop sebelumnya me-return Ray), currentPerson adalah Jane
        8) oldesAge adalah umur Ray(49) & currentAge adalah umur Jane(29)
        9) return oldest(yaity Ray) karena (oldestAge TIDAK < currentAge)
        10) hasil akhir return oldest(yaitu Object dengan name: Ray)

        sebelum loop: oldest merupakan parameter kedua dari reduce() ATAU elemen pertama dari array
        setelah loop: oldest merupakan hasil return dari loop sebelumnya ATAU hasil return loop saat ini(jika saat ini adalah loop terakhir)
        */
    })
};

// Do not edit below this line
module.exports = findTheOldest;
