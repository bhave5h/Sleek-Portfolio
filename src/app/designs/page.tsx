import Container from '@/components/common/Container';
import Brandtoolkits from '@/components/design/Brandtoolkits';
import Gallary from '@/components/design/Gallary';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...getMetadata('/designs'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function DesignsPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Designs
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            My Designs and work across different fields and domains.
          </p>
        </div>

        <Separator />

        {/* Projects */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              All Designs and Creativities
            </h2>
          </div>
          <Gallary />
        </div>

        <Separator />

        <h2 className="text-2xl font-semibold">Branding Identity & Toolkits</h2>
        <Brandtoolkits />

        <Separator />

        <div>
          <a
            href="https://drive.google.com/drive/folders/1ADct_A5Rpt2qmsTg1XF0ce_H-Q15HX1s?usp=sharing"
            className="btn-inner-shadow hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 border-border cursor-pointer rounded-md border px-4 py-2 shadow-md"
          >
            View More In Drive
          </a>
        </div>
      </div>
    </Container>
  );
}
