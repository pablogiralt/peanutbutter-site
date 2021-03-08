// eslint-disable-next-line
export const isRichText = data => Array.isArray(data)

export const maybeRichTextValidator = (prop) => {
  const type = typeof prop
  return ['string', 'object'].includes(type)
}

const camelizeRE = /-(\w)/g
export const camelize = (str) => {
  str = str.replace(/_/g, '-').replace(camelizeRE, (_, c) => {
    return c ? c.toUpperCase() : ''
  })
  return str[0].toUpperCase() + str.slice(1)
}

export const computeProp =
  propName => props => Object.keys(props.theme).length ? props.theme[propName] : props[propName]

export const createComputedProps = (...args) => args.reduce((acc, propName) => ({
  ...acc,
  [`applied${propName.charAt(0).toUpperCase()}${propName.slice(1)}`]: computeProp(propName)
}), {})

export const commonProps = {
  slice: {
    validator ({
      slice_type: sliceType,
      primary,
      items
    }) {
      return sliceType && primary && items
    }
  },
  theme: {
    type: Object,
    required: false,
    default () {
      return {}
    }
  },
  darkMode: {
    type: Boolean,
    required: false,
    default: false
  }
}
