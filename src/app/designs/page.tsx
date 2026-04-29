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

        <div className="mt-12 mb-8 flex h-full items-center justify-start gap-12">
          <div className="rounded-[16px] bg-gradient-to-b from-stone-300/40 to-transparent p-[4px]">
            <a
              href="https://drive.google.com/drive/folders/1ADct_A5Rpt2qmsTg1XF0ce_H-Q15HX1s?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-[12px] bg-gradient-to-b from-white to-stone-200/40 p-[4px] shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:scale-[0.995] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)]"
            >
              <div className="rounded-[8px] bg-gradient-to-b from-stone-200/40 to-white/80 px-4 py-2">
                <div className="flex items-center justify-center gap-2">
                  <span className="font-semibold text-stone-800">
                    View More in Drive
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
