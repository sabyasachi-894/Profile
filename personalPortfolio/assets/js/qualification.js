const qualifications = [
    {
        title: "BTech in Computer Science & Engineering (CSE)",
        year: 2024,
        description: "Will be completing four years bechelor degree from a reputed institute",
        institute: {
            name: "Indian Institute of Information Technology, Kalyani",
            shortName: "IIIT Kalyani",
            duration: "December 2020 - May 2024"
        }
    },
    {
        title: "Indian School Certificate",
        year: 2024,
        description: "Achieved 2 years higher secondary degree",
        institute: {
            name: "Holy Cross School",
            shortName: "HCS",
            duration: "2017 - 2019"
        }
    },
];

const parent = document.getElementById('qualification');

const html = qualifications.map(quali =>
    `<li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <div class="flex items-center">
            <time class="mb-1 mr-3 px-3 py-2 rounded-md leading-none text-gray-100 bg-blue-500 dark:bg-gray-600">${quali.year}</time>
            
        </div>
        <p class="mb-3 text-base font-normal text-gray-800 dark:text-gray-400">${quali.description}</p>
        <p class="text-base font-light text-gray-800 dark:text-gray-400">
        <span title=${quali.institute.name}>${quali.institute.shortName}</span> &bull; ${quali.institute.duration}
        </p>
    </li>`);

parent.innerHTML = html.join(" ");

