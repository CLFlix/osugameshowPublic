import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full text-lg relative flex gap-9 justify-center">
      <Link href="https://osu.ppy.sh/users/18755966">osu! Profile</Link>
      <Link href="https://discord.gg/4HAbQm2tdp">Discord</Link>
      <p>_Kurookami_</p>
      <Link href="https://www.twitch.tv/kurookamitv">Twitch</Link>
      <Link href="https://www.youtube.com/@Doku_Kurookami">YouTube</Link>
    </footer>
  );
};

export default Footer;
