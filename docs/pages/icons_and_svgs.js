// @flow strict
import type { Node } from 'react';
import { Icon } from 'gestalt';
import MainSection from '../components/MainSection.js';
import Page from '../components/Page.js';
import CombinationNew from '../components/CombinationNew.js';
import PageHeader from '../components/PageHeader.js';

export default function IconPage(): Node {
  const icons: Array<string> = Icon?.icons ?? [];
  return (
    <Page title="Icons and SVGs">
      <PageHeader name="Icons and SVGs" />
      <MainSection
        name="Icon library"
        description={`The Gestalt icon library has the following icons (in alphabetical order by name):

${icons.map((name) => `'${name}'`).join(' | ')}`}
      >
        <CombinationNew icon={icons}>
          {({ icon }) => <Icon color="darkGray" accessibilityLabel="" size={32} icon={icon} />}
        </CombinationNew>
      </MainSection>
      <MainSection name="Custom SVG icons">
        <MainSection.Subsection
          description={`
If you need a new icon for an experiment that is not listed on our [Icon](/Icon) documentation, use the \`dangerouslySetSvgPath\` prop on [Icon](/Icon), [IconButton](/IconButton), and [Pog](/Pog).

However, \`dangerouslySetSvgPath\` only works with one SVG path. For icons with multiple paths and groups, use [Box](/Box) and \`dangerouslySetInlineStyle\` to pass the custom icon as \`backgroundImage\`.

Once your experiment ships to 100%, ask your designer to follow the directions in the [Icon kit](https://www.figma.com/file/N60WnDx9j6Moz3Dt1rNsq9/Icon-Kit). Once the asset is ready, we can add the Icon to Gestalt.

We recommend streamlining (removing strokes, transforms, ...) and optimizing the SVGs to improve the performance and the pinner experience using the tools [svgo](https://github.com/svg/svgo) or [ImageOptim](https://imageoptim.com/mac)

Gestalt Icon svg files follow a particular format and use automatic file validation testing.

\`<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
<path d="_______________"/>
</svg>\`

We override the color in the Gestalt Icon component and Gestalt only uses the \`d\` attribute in the \`path\` tag and the basic attributes for visualizing the raw file in the \`svg\` tag . For consistency, we don't include unnecessary attributes in the \`svg\` and \`path\` tags.

Accessibility notes:
- Icons must meet the [Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) requirement.
- Avoid using unfamiliar icons. Always refer to Gestalt available icons. A new icon needs to be user tested to evaluate comprehension.
- Some icons don’t translate well in all cultures, so it's preferred to user-test each Icon before it gets added to Gestalt.
`}
        />
      </MainSection>
    </Page>
  );
}
