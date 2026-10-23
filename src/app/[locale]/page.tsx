import { Hero } from "@/components/home/Hero";
import { ExperienceAndStack } from "@/components/home/ExperienceAndStack";
import { ListProjects } from "@/components/project/ListProjects";
import { Technologies } from "@/components/technology/Technologies";
type Props = {
  params: Promise<{ locale: string }>;
};

const Home = async ({ params }: Props) => {
  const locale = (await params).locale;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Hero />
      <ExperienceAndStack />
      <ListProjects />
      <Technologies />
    </main>
  );
};
export default Home;
