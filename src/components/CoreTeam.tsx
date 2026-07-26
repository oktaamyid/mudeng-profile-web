import { FadeInUp, Parallax, SlideIn } from "./motion";
import teamPhoto1 from "../assets/team/team-photo-1.png";
import teamPhoto2 from "../assets/team/team-photo-2.png";
import teamPhoto3 from "../assets/team/team-photo-3.png";
import starCoreteam from "../assets/team/star-coreteam.svg";
import gradientMesh1 from "../assets/team/gradient-mesh-1.webp";
import gradientMesh2 from "../assets/team/gradient-mesh-2.webp";

const sections = [
  {
    title: "What is MUDENG?",
    texts: [
      "Multimedia Digital Engagement (MUDENG) adalah suatu komunitas dan juga salah satu platform pembelajaran kreatif di Sekolah Tinggi Teknologi Terpadu Nurul Fikri, yang ditujukan untuk memfasilitasi mahasiswa dalam mempelajari ilmu kreatif serta mengatasi kesulitan belajar disiplin kreatif secara mandiri.",
      "MUDENG tidak hanya menyediakan pelatihan untuk mempelajari ilmu multimedia, tetapi juga menawarkan platform bagi mahasiswa untuk mengukur perkembangan keterampilan mereka dalam studi multimedia sebagai anggota MUDENG.",
    ],
    image: teamPhoto1,
    imagePosition: "left" as const,
  },
  {
    title: "MUCHARGE",
    texts: [
      "Kegiatan Bonding Multimedia Digital Engagement (MUDENG) merupakan agenda keakraban internal yang khusus diadakan bagi seluruh pengurus dan anggota MUDENG. Acara ini sengaja dikemas lewat konsep yang santai untuk mencairkan suasana dan menghilangkan sekat antar divisi, sehingga rasa kekeluargaan di dalam tim bisa tumbuh lebih erat sejak awal periode.",
      "Selain diisi dengan berbagai keseruan dan games bersama, momen bonding ini menjadi wadah penting untuk menyatukan berbagai karakter yang ada di dalam organisasi. Melalui interaksi yang kasual ini, diharapkan terbangun chemistry yang kuat dan rasa saling memiliki, sehingga seluruh pengurus dan anggota bisa lebih kompak saat berkolaborasi menjalankan Mudeng ke depannya.",
    ],
    image: teamPhoto2,
    imagePosition: "right" as const,
  },
  {
    title: "RAKER",
    texts: [
      "Rapat Kerja (Raker) Multimedia Digital Engagement (MUDENG) merupakan agenda utama kepengurusan di Sekolah Tinggi Teknologi Terpadu Nurul Fikri yang bertujuan untuk merancang dan mematangkan program kerja selama satu periode. Di kegiatan ini, seluruh anggota duduk bersama untuk menyamakan visi dan arah gerak, sehingga ukm ini bisa terus konsisten memfasilitasi mahasiswa yang ingin mendalami dunia kreatif dan digital.",
      "Selain fokus pada penyusunan rencana pelatihan dan event multimedia, Raker ini juga menjadi ruang bagi para pengurus untuk membangun chemistry dan solidaritas tim. Harapannya, setelah Raker selesai, pengurus MUDENG bukan cuma punya daftar rancangan kerja yang rapi, tapi juga lebih solid dan siap secara manajerial untuk menggerakkan ukm ini ke depannya.",
    ],
    image: teamPhoto3,
    imagePosition: "left" as const,
  },
];

export default function CoreTeam() {
  return (
    <section id="coreteam" className="relative py-20 md:py-32">
      {/* Gradient mesh decorations — parallax */}
      <Parallax speed={-0.1}>
        <img
          src={gradientMesh2}
          alt=""
          className="absolute pointer-events-none"
          style={{ left: "-20%", top: "5%", width: "45%", height: "auto" }}
        />
      </Parallax>
      <Parallax speed={0.1}>
        <img
          src={gradientMesh1}
          alt=""
          className="absolute pointer-events-none"
          style={{ left: "75%", top: "44%", width: "45%", height: "auto" }}
        />
      </Parallax>

      {/* Decorative star */}
      <img
        src={starCoreteam}
        alt=""
        className="absolute pointer-events-none"
        style={{ left: "-3%", top: "90%", width: "200px", height: "auto" }}
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative z-10">
        {/* Section Header */}
        <FadeInUp>
          <div className="flex items-center justify-between mb-8 md:mb-16">
            <h2 className="font-anton text-[32px] sm:text-[40px] md:text-[60px] text-primary uppercase leading-none">
              CORE TEAM
            </h2>
            <h2 className="font-anton text-[32px] sm:text-[40px] md:text-[60px] text-primary uppercase leading-none">
              MUDENG
            </h2>
          </div>
        </FadeInUp>

        {/* Content Rows */}
        <div className="space-y-12 md:space-y-16">
          {sections.map((section, i) => (
            <SlideIn
              key={i}
              direction={section.imagePosition === "left" ? "left" : "right"}
              delay={i * 0.1}
            >
              <div
                key={i}
                className={`flex flex-col md:flex-row gap-6 md:gap-8 items-center ${
                  section.imagePosition === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="md:w-1/2 rounded-2xl overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-[280px] sm:h-[350px] md:h-[488px] object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:w-1/2">
                  <h3 className="text-4xl font-extrabold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  {section.texts.map((text, j) => (
                    <p
                      key={j}
                      className="text-gray-600 text-sm leading-relaxed mb-4"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
