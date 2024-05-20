// src/app/page.tsx
import Home from '../../pages/Home';

export const metadata = {
  title: "Salesforce",
  description: "Novo portal focado em acessibilidade",
};

export default function Page() {
  return (
    <div>
      <Home />
    </div>
  );
}
