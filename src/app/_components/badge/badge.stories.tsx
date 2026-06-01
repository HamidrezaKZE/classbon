import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";
// import { BadgeProps } from "./badge.types";
// const meta: Meta<typeof Badge> = {
//     component: Badge,
//     tags: ["autodocs"],
//     decorators: [
//         (Story) => {
//             document.documentElement.classList.add('dark');
//             return <Story />
//         }
//     ]
// }

// export default meta;
const meta: Meta<typeof Badge> = {
  title: "_components/Badge",
  component: Badge,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      document.documentElement.classList.add("dark");
      return <Story />;
    },
  ],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "neutral",
        "primary",
        "secondary",
        "accent",
        "ghost",
        "error",
        "warning",
        "success",
        "info",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["tiny", "small", "normal", "large"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

// Default badge story
export const Default: Story = {
  args: {
    children: "Default Badge",
    variant: "neutral",
    size: "normal",
  },
};

// All brand colors showcase
export const BrandColors: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="ghost">Ghost</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different brand color variants of the badge component.",
      },
    },
  },
};

// State colors showcase
export const StateColors: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "State color variants (info, success, warning, error) for status indicators.",
      },
    },
  },
};

// Size variations
// Size variations
export const BadgeSize: Story = {
  render: () => (
    <div className="flex gap-2 items-center flex-wrap">
      <Badge variant="primary" size="tiny">
        Tiny
      </Badge>
      <Badge variant="primary" size="small">
        Small
      </Badge>
      <Badge variant="primary" size="normal">
        Normal
      </Badge>
      <Badge variant="primary" size="large">
        Large
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different size options for the badge component. All badges use primary color for better size comparison.",
      },
    },
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 flex-wrap">
        <h3 className="w-full text-sm font-semibold mb-2">Brand Colors:</h3>
        <Badge variant="neutral">Neutral</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge variant="ghost">Ghost</Badge>
      </div>
      <div className="flex gap-2 flex-wrap">
        <h3 className="w-full text-sm font-semibold mb-2">State Colors:</h3>
        <Badge variant="info">Info</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Complete showcase of all badge variants and colors.",
      },
    },
  },
};

// Interactive badge for testing different props
export const Interactive: Story = {
  args: {
    children: "Interactive Badge",
    variant: "primary",
    size: "normal",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive badge that can be controlled via Storybook controls.",
      },
    },
  },
};
