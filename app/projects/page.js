export default function Projects() {
  const projects = [
    { id: 1, name: "ShopSyy", link: "https://shopsyy-mx.netlify.app/" },
    { id: 2, name: "BookStore", link: "https://bookstore-tbc.netlify.app/" },
  ];

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Mening loyihalarim</h1>
      <ul className="mt-4 space-y-2">
        {projects.map((p) => (
          <li key={p.id}>
            <a
              href={p.link}
              className="text-blue-500 underline"
              target="_blank"
            >
              {p.name}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
