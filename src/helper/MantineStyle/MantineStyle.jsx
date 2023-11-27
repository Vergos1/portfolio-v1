//note custom text input styles

import { color } from 'framer-motion';

export const customTextInputStyles = {
  input: {
    borderRadius: '10px',
  },
  label: {
    color: 'var(--text-default)',
    fontFamily: 'var(--exo2)',
  },
  error: {
    color: 'var(--text-error)',
    fontSize: 'var(--f-12)',
    fontFamily: 'var(--nunito)',
    marginTop: '4px',
  },
  required: {
    color: 'var(--text-error)',
  },
};

export const customButtonStyles = {
  root: {
    width: '100%',
    color: 'var(--text-default-black)',
    fontSize: 'var(--f-16)',
    fontWeight: 'var(--fw-800)',
    fontFamily: 'var(--exo2)',
    background: 'var(--button-default)',
    textTransform: 'uppercase',
    transition: 'all 0.3s',
    '&:hover': {
      background: 'var(--button-hover)',
    },
    '&:active': {
      background: 'var(--button-hover)',
    },
    '&:disabled': {
      background: 'var(--button-hover)',
    },
  },
};

export const customCheckboxStyles = {
  root: {
    marginTop: '0rem !important',
    display: 'flex',
    alignItems: 'center',
  },
  body: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    fontSize: '14px',
    color: 'var(--text-selected-white)',
    marginBottom: 0,
  },
  input: {
    background: 'none',
    border: '1px solid var(--border-button)',
    '&:hover': {
      border: '1px solid var(--border-button)',
    },
    '&:checked': {
      background: 'var(--button-default)',
      border: '1px solid var(--border-button)',
    },
    '&:focus': {
      border: '1px solid var(--border-button)',
    },
  },
  icon: {
    color: '#000 !important',
  },
};

export const customSelectStyles = {
  input: {
    background: 'var(--button-default)',
    color: 'var(--text-default-black)',
    fontSize: 'var(--f-16)',
    fontWeight: 'var(--fw-600)',
    fontFamily: 'var(--exo2)',
    // lineHeight: '16px',
    border: 'none',
    width: '60px',
    padding: '6px 24px 6px 8px',
    textAlign: 'center',
    borderRadius: '4px',
    '&:active': {
      color: 'var(--text-default-black)',
    },
    '&:focus': {
      color: 'var(--text-default-black)',
    },
  },
  rightSection: {
    width: '24px',
    paddingRight: '6px',
  },
  dropdown: {
    background: 'var(--block-item-light)',
    color: 'var(--text-default)',
    border: 'none',
    borderRadius: '4px',
  },
  item: {
    color: 'var(--text-default)',
    fontSize: 'var(--f-14)',
    fontWeight: 'var(--fw-600)',
    fontFamily: 'var(--exo2)',
    backgroundColor: 'transparent',
    padding: '6px 24px 6px 8px',
    textAlign: 'left',
    '&:hover': {
      background: 'transparent',
      color: 'var(--text-selected-white)',
    },
    '&[data-selected]': {
      background: 'transparent',
      color: 'var(--text-selected-birch)',
      '&:hover': {
        background: 'transparent',
      },
    },
    '&:not(:hover)': {
      background: 'transparent',
    },
  },
};
