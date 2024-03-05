import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Script({ src }: { src: string }) {
  return (
    <HelmetProvider>
      <Helmet>
        <script type="module" src={src}></script>
      </Helmet>
    </HelmetProvider>
  );
}
