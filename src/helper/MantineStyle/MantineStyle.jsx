//note custom text input styles

import { color } from "framer-motion";



export const customTextInputStyles = {
  label: {
    fontFamily: "var(--saira)"
  },
  error: {
    color: "var(--text-error)",
    fontSize: "var(--f-12)",
    fontFamily: "var(--nunito)",
    marginTop: "4px"
  },
  required: {
    color: "var(--text-error)"
  }
};

export const customButtonStyles = {
  root: {
    width: "100%",
    color: "var(--text-default-black)",
    fontSize: "var(--f-16)",
    fontWeight: "var(--fw-800)",
    fontFamily: "var(--saira)",
    background: "var(--button-default)",
    textTransform: "uppercase",
    transition: "all 0.3s",
    "&:hover": {
      background: "var(--button-hover)"
    },
    "&:active": {
      background: "var(--button-hover)"
    },
    "&:disabled": {
      background: "var(--button-hover)"
    }
  }
};

export const customCheckboxStyles = {
  root: {
    marginTop: "0rem !important",
  },
  label: {
    fontSize: "14px",
    color: "var(--text-selected-white)",
    marginBottom: 0
  },
  input: {
    background: "none",
    border: "1px solid var(--border-button)",
    "&:hover": {
      border: "1px solid var(--border-button)"
    },
    "&:checked": {
      background: "var(--button-default)",
      border: "1px solid var(--border-button)"
    },
    "&:focus": {
      border: "1px solid var(--border-button)"
    },
  },
  icon: {
    color: "#000 !important"
  },
};