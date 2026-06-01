import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "_components/Button",
  component: Button,
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
        "success",
        "info",
        "warning",
        "error",
      ],
      description: "Visual variant of the button",
    },
    size: {
      control: { type: "select" },
      options: ["tiny", "small", "normal", "large"],
      description: "Size of the button",
    },
    shape: {
      control: { type: "select" },
      options: ["default", "wide", "full", "square"],
      description: "Shape of the button",
    },
    isOutline: {
      control: { type: "boolean" },
      description: "Show outline style",
    },
    isLink: {
      control: { type: "boolean" },
      description: "Show as link style",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable the button",
    },
    isLoading: {
      control: { type: "boolean" },
      description: "Show loading state",
    },
    loadingType: {
      control: { type: "select" },
      options: ["spinner", "ring"],
      description: "Loading animation type",
    },
    loadingText: {
      control: { type: "text" },
      description: "Text to show while loading",
    },
    children: {
      control: { type: "text" },
      description: "Button content",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const BrandColors: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Button>Default</Button>
      <Button variant="neutral">Neutral</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="ghost">Ghost</Button>
      <Button isLink={true}>Link</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different brand color variants of the button component.",
      },
    },
  },
};

export const StateColors: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Button variant="success">Success</Button>
      <Button variant="info">Info</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="error">Error</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "State color variants for status indicators.",
      },
    },
  },
};

export const OutlineButton: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Button>Default</Button>
      <Button isOutline variant="neutral">
        Neutral
      </Button>
      <Button isOutline variant="primary">
        Primary
      </Button>
      <Button isOutline variant="secondary">
        Secondary
      </Button>
      <Button isOutline variant="accent">
        Accent
      </Button>
      <Button isOutline variant="ghost">
        Ghost
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Outline style buttons for different variants.",
      },
    },
  },
};

export const OutlineStateButtons: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Button isOutline variant="success">
        Success
      </Button>
      <Button isOutline variant="info">
        Info
      </Button>
      <Button isOutline variant="warning">
        Warning
      </Button>
      <Button isOutline variant="error">
        Error
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Outline style buttons for state colors.",
      },
    },
  },
};

export const ButtonSize: Story = {
  render: () => (
    <div className="flex gap-2 items-center flex-wrap">
      <Button variant="primary" size="tiny">
        Tiny
      </Button>
      <Button variant="primary" size="small">
        Small
      </Button>
      <Button variant="primary" size="normal">
        Normal
      </Button>
      <Button variant="primary" size="large">
        Large
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different size options for the button component.",
      },
    },
  },
};

export const WideButton: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Button variant="neutral" shape="wide">
        Wide Button
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Button with wide shape (full width of container).",
      },
    },
  },
};

export const FullButton: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Button variant="neutral" shape="full">
        Full Button
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Button with full width shape.",
      },
    },
  },
};

export const SquareButtons: Story = {
  render: () => (
    <div className="flex gap-2 items-center flex-wrap">
      <Button variant="neutral" size="tiny" shape="square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Button>
      <Button variant="neutral" size="small" shape="square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Button>
      <Button variant="neutral" size="normal" shape="square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Button>
      <Button variant="neutral" size="large" shape="square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Square shaped buttons perfect for icons only.",
      },
    },
  },
};

export const DisabledButton: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Button variant="neutral" disabled>
        Disabled Button
      </Button>
      <Button variant="primary" disabled>
        Disabled Primary
      </Button>
      <Button variant="success" disabled>
        Disabled Success
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Buttons in disabled state.",
      },
    },
  },
};

export const IconButton: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Button variant="primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        Submit
      </Button>
      <Button variant="primary">
        Submit
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Buttons with icons on left or right side.",
      },
    },
  },
};

export const ButtonWithLoading: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Button variant="neutral" isLoading={true} loadingText="Loading" />
      <Button
        variant="neutral"
        isLoading={true}
        loadingType="ring"
        loadingText="Loading"
      />
      <Button variant="primary" isLoading={true} loadingText="Loading" />
      <Button
        variant="accent"
        isOutline
        isLoading={true}
        loadingType="ring"
        loadingText="Loading"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Buttons showing loading states with different animations.",
      },
    },
  },
};

// Interactive button for testing all props
export const Interactive: Story = {
  args: {
    children: "Interactive Button",
    variant: "primary",
    size: "normal",
    isOutline: false,
    disabled: false,
    isLoading: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive button that can be controlled via Storybook controls.",
      },
    },
  },
};
