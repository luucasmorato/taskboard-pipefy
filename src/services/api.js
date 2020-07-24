export function loadLists() {
  return [
    {
      title: "Tasks",
      creatable: true,
      cards: [
        {
          id: 1,
          content: "Develop home page",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
        {
          id: 2,
          content: "Configure application routing",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
        {
          id: 3,
          content: "create interface styles",
          labels: ["#54e1f7"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
        {
          id: 4,
          content: "Configure redux",
          labels: ["#54e1f7"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
      ],
    },
    {
      title: "Doing",
      creatable: false,
      cards: [
        {
          id: 5,
          content: "Develop application interface",
          labels: [],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
      ],
    },
    {
      title: "Paused",
      creatable: false,
      cards: [
        {
          id: 6,
          content: "Create integration api",
          labels: ["#7159c1"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
        {
          id: 7,
          content: "Create unit tests",
          labels: ["#54e1f7"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
        {
          id: 8,
          content: "Create automatic deploy",
          labels: [],
        },
      ],
    },
    {
      title: "Concluded",
      creatable: false,
      done: true,
      cards: [
        {
          id: 9,
          content: "Task management problem analysis",
          labels: [],
        },
        {
          id: 10,
          content: "Configure dependencies",
          labels: ["#54e1f7"],
        },
        {
          id: 11,
          content: "Develop project architecture",
          labels: ["#7159c1"],
        },
      ],
    },
  ];
}
