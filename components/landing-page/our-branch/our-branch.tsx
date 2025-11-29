import Image from "next/image";

const branches = [
  {
    id: 1,
    name: "Innovare HP - Grand Rapids",
    phone: "+1 269-501-4496",
    address: "4221 Bud Drive NE, Comstock Park, MI 49321",
    googleLink:
      "https://www.google.com/search?q=Innovare+HP&sca_esv=3f626f5782a50780&hl=en-US&sxsrf=AE3TifOGAyQZWt_d7Av__MIwzGgxEuMtyQ%3A1762795431311&ei=px8SacbiEpfO1e8P3fmcgQs&ved=0ahUKEwiG0vrbjOiQAxUXZ_UHHd08J7AQ4dUDCBE&uact=5&oq=Innovare+HP&gs_lp=Egxnd3Mtd2l6LXNlcnAiC0lubm92YXJlIEhQMgQQIxgnMgoQIxiABBgnGIoFMgsQABiABBiGAxiKBTIFEAAY7wUyBRAAGO8FMggQABiABBiiBDIIEAAYgAQYogRIyARQYVhhcAF4AZABAJgBaaABaaoBAzAuMbgBA8gBAPgBAZgCAqACecICChAAGLADGNYEGEeYAwCIBgGQBgSSBwMxLjGgB5MGsgcDMC4xuAdxwgcDMi0yyAcN&sclient=gws-wiz-serp",
    image: "/assets/branch/head-quarter.webp",
  },
  {
    id: 2,
    name: "Innovare HP - Ann Arbor",
    phone: "+1 734-794-4701",
    address: "2723 S State St UNIT 150, Ann Arbor, MI 48108, United States",
    googleLink:
      "https://www.google.com/search?kgmid=/g/11yls5sdyv&hl=en-US&q=Innovare+HP+-+Ann+Arbor&shndl=30&shem=lcuae,ptotple,shrtsdl&source=sh/x/loc/osrp/m5/3&kgs=3ef409c858d29d0d&utm_source=lcuae,ptotple,shrtsdl,sh/x/loc/osrp/m5/3",
    image: "/assets/branch/ann-arbor.webp",
  },
];

export default function OurBranch() {
  return (
    <section id="branches" className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Offices</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="rounded-2xl shadow-lg overflow-hidden bg-gray-50 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{branch.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {branch.address}
                </p>
                <p className="text-gray-700 font-medium mt-2">{branch.phone}</p>
                {branch.googleLink && (
                  <a
                    href={branch.googleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline text-sm mt-1 inline-block"
                  >
                    View on Google Maps
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
