/* @ds-bundle: {"format":4,"namespace":"LookingForwardDesignSystem_844b43","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"}],"sourceHashes":{"components/core/Button.jsx":"0e8787575dbf","components/core/Card.jsx":"d04c1774d0a4","components/core/Divider.jsx":"c71cd5482e1d","components/core/Eyebrow.jsx":"d677bbf39d6b","components/core/Input.jsx":"a2235ad7eeae","components/core/Tag.jsx":"fec907d1d91e","components/core/TextLink.jsx":"80252348b736","ui_kits/website/ContactScreen.jsx":"c1f1c1b46409","ui_kits/website/HomeScreen.jsx":"f28fc65a0678","ui_kits/website/StayScreen.jsx":"4718fed6479d","ui_kits/website/StoryScreen.jsx":"f108c4fa6f65","ui_kits/website/doc-page.js":"f106e1b77ea0","ui_kits/website/shell.jsx":"7336859d366a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LookingForwardDesignSystem_844b43 = window.LookingForwardDesignSystem_844b43 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Looking Forward — Button
 * Primary: Terra background, Muro Chiaro text. Hover → Ombra.
 * Secondary: transparent, 1.5px Ombra border. Hover → Ombra fill, Muro text.
 * Typography: Lato 700, uppercase, letter-spacing 0.1em.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  as = 'button',
  href,
  onClick,
  type = 'button',
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: {
      padding: '10px 20px',
      fontSize: '11px'
    },
    md: {
      padding: '14px 28px',
      fontSize: '12px'
    },
    lg: {
      padding: '17px 36px',
      fontSize: '13px'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 'var(--ls-button, 0.1em)',
    borderRadius: 'var(--radius-input, 6px)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    textDecoration: 'none',
    transition: 'background var(--duration-brand, 300ms) var(--ease-brand), color var(--duration-brand, 300ms) var(--ease-brand), transform 120ms var(--ease-brand)',
    transform: active && !disabled ? 'translateY(1px)' : 'translateY(0)',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: hover && !disabled ? 'var(--ombra)' : 'var(--terra)',
      color: 'var(--muro-chiaro)',
      border: '1.5px solid transparent'
    },
    secondary: {
      background: hover && !disabled ? 'var(--ombra)' : 'transparent',
      color: hover && !disabled ? 'var(--muro)' : 'var(--ombra)',
      border: '1.5px solid var(--ombra)'
    },
    quiet: {
      background: 'transparent',
      color: hover && !disabled ? 'var(--terra)' : 'var(--ombra)',
      border: '1.5px solid transparent'
    }
  };
  const Tag = as === 'a' ? 'a' : 'button';
  const tagProps = Tag === 'a' ? {
    href
  } : {
    type,
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, {
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...variants[variant]
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Looking Forward — Card
 * Muro Chiaro surface. EITHER a 1px Muro Scuro border OR a soft umber shadow —
 * never both. Soft 8px radius. Gentle lift on hover when interactive.
 */
function Card({
  children,
  elevation = 'border',
  // 'border' | 'shadow' | 'flat'
  interactive = false,
  padding = 'var(--space-6, 32px)',
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const looks = {
    border: {
      border: '1px solid var(--border-soft)',
      boxShadow: 'none'
    },
    shadow: {
      border: 'none',
      boxShadow: hover && interactive ? 'var(--shadow-lift)' : 'var(--shadow-card)'
    },
    flat: {
      border: 'none',
      boxShadow: 'none'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--bg-card)',
      borderRadius: 'var(--radius-soft, 8px)',
      padding,
      cursor: interactive ? 'pointer' : 'default',
      transform: interactive && hover ? 'translateY(-2px)' : 'translateY(0)',
      transition: 'transform var(--duration-brand, 300ms) var(--ease-brand), box-shadow var(--duration-brand, 300ms) var(--ease-brand)',
      ...looks[elevation]
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Looking Forward — Divider
 * Prefer space over lines. When a break is needed, either a hairline
 * Muro Scuro rule or a small centred Terra dot for editorial pages.
 */
function Divider({
  variant = 'dot',
  ...rest
}) {
  if (variant === 'dot') {
    return /*#__PURE__*/React.createElement("div", _extends({
      role: "separator",
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--terra)',
        fontSize: '20px',
        lineHeight: 1,
        padding: 'var(--space-6, 32px) 0'
      }
    }, rest), "\xB7");
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 'none',
      borderTop: '1px solid var(--border-soft)',
      margin: 'var(--space-6, 32px) 0'
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Looking Forward — Eyebrow
 * Small uppercase label above headings. Lato 700, 12px, ls 0.12em, Terra.
 * (Intentional addition — the eyebrow treatment recurs across the brand.)
 */
function Eyebrow({
  children,
  color = 'var(--terra)',
  as = 'div',
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--type-eyebrow, 12px)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-eyebrow, 0.12em)',
      color,
      margin: 0
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Looking Forward — Input
 * Muro Chiaro field, 1px Muro Scuro border, 6px radius, Grano focus ring.
 * Supports a label and an optional textarea via multiline.
 */
function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  multiline = false,
  rows = 4,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const fieldStyle = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-body)',
    fontSize: '16px',
    color: 'var(--ombra)',
    background: 'var(--muro-chiaro)',
    border: '1px solid var(--border-soft)',
    borderRadius: 'var(--radius-input, 6px)',
    padding: '12px 14px',
    outline: 'none',
    boxShadow: focus ? '0 0 0 3px rgba(212,162,87,0.35)' : 'none',
    borderColor: focus ? 'var(--grano)' : 'var(--border-soft)',
    transition: 'box-shadow var(--duration-brand,300ms) var(--ease-brand), border-color var(--duration-brand,300ms) var(--ease-brand)',
    resize: multiline ? 'vertical' : undefined
  };
  const shared = {
    id: fieldId,
    placeholder,
    value,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: fieldStyle,
    ...rest
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: '12px',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--pietra)'
    }
  }, label), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, shared)) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, shared)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Looking Forward — Tag / pill
 * Salvia at 15% background, Salvia-dark text, fully rounded.
 * Lato 700, 11px, uppercase. For nature/farm content and positive states.
 */
function Tag({
  children,
  tone = 'salvia',
  ...rest
}) {
  const tones = {
    salvia: {
      background: 'var(--salvia-tint)',
      color: 'var(--salvia-ink)'
    },
    terra: {
      background: 'rgba(196,122,80,0.14)',
      color: 'var(--ombra)'
    },
    grano: {
      background: 'rgba(212,162,87,0.18)',
      color: 'var(--ombra-scura)'
    },
    neutral: {
      background: 'var(--muro-scuro)',
      color: 'var(--ombra)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill, 999px)',
      ...tones[tone]
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Looking Forward — TextLink
 * Ombra text with a Grano underline (2px, offset 3px). Hover → Terra text.
 * For links inside running prose.
 */
function TextLink({
  children,
  href = '#',
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'inherit',
      color: hover ? 'var(--terra)' : 'var(--ombra)',
      textDecoration: 'underline',
      textDecorationColor: hover ? 'var(--terra)' : 'var(--grano)',
      textDecorationThickness: '2px',
      textUnderlineOffset: '3px',
      transition: 'color var(--duration-brand, 300ms) var(--ease-brand), text-decoration-color var(--duration-brand, 300ms) var(--ease-brand)',
      cursor: 'pointer'
    }
  }, rest), children);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
/* Looking Forward — Contact / enquiry screen with a working-feeling form. */
function ContactScreen({
  onNav
}) {
  const {
    Button,
    Eyebrow,
    Input,
    Card
  } = window.LookingForwardDesignSystem_844b43;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1180,
      margin: '32px auto 0',
      padding: '0 48px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 72,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Get in touch"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 52,
      lineHeight: 1.08,
      color: 'var(--ombra-scura)',
      margin: '14px 0 16px'
    }
  }, "Come and stay, or just ", /*#__PURE__*/React.createElement("em", null, "say hello")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.65,
      color: 'var(--ombra)',
      maxWidth: 420,
      margin: '0 0 32px'
    }
  }, "Tell us roughly when you're thinking of, and how many of you. We answer every message ourselves \u2014 usually within a day or two."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.8,
      color: 'var(--ombra)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--terra)',
      fontWeight: 700,
      marginBottom: 8
    }
  }, "Find us"), "Sessame, Asti \xB7 Monferrato, Piedmont, Italy", /*#__PURE__*/React.createElement("br", null), "ciao@lookingforward2.it")), /*#__PURE__*/React.createElement(Card, {
    elevation: "shadow",
    padding: "32px"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 600,
      fontSize: 30,
      color: 'var(--ombra-scura)',
      marginBottom: 10
    }
  }, "Thank you"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--ombra)',
      margin: '0 0 24px'
    }
  }, "We've got your note and we'll be in touch soon."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    placeholder: "Jane Ross"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "jane@email.com"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Arrival",
    type: "date"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Guests",
    type: "number",
    placeholder: "2"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Anything we should know?",
    multiline: true,
    rows: 4,
    placeholder: "We're two, hoping for a quiet week in September\u2026"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit"
  }, "Send enquiry"))));
}
window.ContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
/* Looking Forward — Home screen. Asymmetric hero, intro, room preview, CTA. */
function HomeScreen({
  onNav
}) {
  const {
    Button,
    Eyebrow,
    Card,
    Tag,
    Divider
  } = window.LookingForwardDesignSystem_844b43;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '40px 48px 0',
      display: 'grid',
      gridTemplateColumns: '1fr 0.86fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Sessame, Asti \xB7 Piedmont"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 68,
      lineHeight: 1.04,
      color: 'var(--ombra-scura)',
      margin: '16px 0 20px',
      letterSpacing: '-0.01em'
    }
  }, "A life being rebuilt,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "slowly"), " and by hand."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      lineHeight: 1.65,
      color: 'var(--ombra)',
      maxWidth: 480,
      margin: '0 0 32px'
    }
  }, "We left Scotland for an old farmhouse in the Monferrato hills. It's becoming a B&B, a writers' retreat, and a small produce farm \u2014 one room, one season at a time."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNav('stay')
  }, "Reserve a stay"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNav('story')
  }, "Read the story"))), /*#__PURE__*/React.createElement(Photo, {
    label: "the farmhouse at golden hour",
    arch: true,
    height: 440,
    tone: "grano",
    style: {
      transform: 'translateY(-8px)'
    }
  })), /*#__PURE__*/React.createElement(Divider, {
    variant: "dot"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      padding: '0 48px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--terra)"
  }, "What this is"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: 30,
      lineHeight: 1.35,
      color: 'var(--ombra-scura)',
      margin: '14px 0 0'
    }
  }, "Not a hotel. Not a brand. A real place, still half-finished, where you can slow down, sleep well, and eat what the garden gave us.")), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1180,
      margin: '96px auto 0',
      padding: '0 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "The house"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 34,
      color: 'var(--ombra-scura)',
      margin: '8px 0 0'
    }
  }, "Four rooms, slowly restored")), /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    onClick: () => onNav('stay')
  }, "See all rooms \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, [['The olive room', 'salvia', 'South-facing, a view of the vines', 'Garden view'], ['The wheat room', 'grano', 'Under the eaves, warm at dawn', 'Top floor'], ['The terracotta room', 'terra', 'Off the courtyard, cool in summer', 'Ground floor']].map(([name, tone, desc, tag]) => /*#__PURE__*/React.createElement(Card, {
    key: name,
    elevation: "shadow",
    interactive: true,
    padding: "0",
    onClick: () => onNav('stay')
  }, /*#__PURE__*/React.createElement(Photo, {
    label: name.toLowerCase(),
    tone: tone,
    height: 190,
    style: {
      borderRadius: 'var(--radius-soft) var(--radius-soft) 0 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: tone === 'salvia' ? 'salvia' : 'neutral'
  }, tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 600,
      fontSize: 23,
      color: 'var(--ombra-scura)',
      margin: '10px 0 6px'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--ombra)',
      margin: 0
    }
  }, desc)))))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StayScreen.jsx
try { (() => {
/* Looking Forward — Stay screen. Room listing with editorial detail rows. */
function StayScreen({
  onNav
}) {
  const {
    Button,
    Eyebrow,
    Tag,
    Divider
  } = window.LookingForwardDesignSystem_844b43;
  const rooms = [['The olive room', 'salvia', 'Garden view', 'A south-facing room over the vegetable garden, with a view down to the vines. Linen sheets, a small writing desk under the window, morning sun.', '€120 / night', 'Sleeps 2'], ['The wheat room', 'grano', 'Top floor', 'Tucked under the old eaves, warmest at dawn. Exposed beams we cleaned by hand, a deep bath, and the quiet of the top of the house.', '€135 / night', 'Sleeps 2'], ['The terracotta room', 'terra', 'Ground floor', 'Opening onto the shaded courtyard, cool through the Piedmont summer. The easiest room to come and go from, close to the kitchen.', '€110 / night', 'Sleeps 2']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1180,
      margin: '32px auto 0',
      padding: '0 48px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Stay with us"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 52,
      lineHeight: 1.08,
      color: 'var(--ombra-scura)',
      margin: '14px 0 12px',
      maxWidth: 620
    }
  }, "Four rooms, and a table you're welcome at"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.65,
      color: 'var(--ombra)',
      maxWidth: 640,
      margin: 0
    }
  }, "Breakfast is whatever the garden and the hens gave us that morning. Dinner, if you'd like it, is booked the day before. The rest of the day is yours.")), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1180,
      margin: '56px auto 0',
      padding: '0 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, rooms.map(([name, tone, tag, desc, price, sleeps], i) => /*#__PURE__*/React.createElement("div", {
    key: name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 48,
      alignItems: 'center',
      padding: '20px 0'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: name.toLowerCase(),
    tone: tone,
    arch: i === 0,
    height: 300
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tag, {
    tone: tone === 'salvia' ? 'salvia' : 'grano'
  }, tag), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 600,
      fontSize: 34,
      color: 'var(--ombra-scura)',
      margin: '12px 0 12px'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--ombra)',
      maxWidth: 460,
      margin: '0 0 20px'
    }
  }, desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 26,
      color: 'var(--terra)'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--pietra)',
      fontWeight: 700
    }
  }, sleeps)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNav('contact')
  }, "Enquire about dates"))), i < rooms.length - 1 && /*#__PURE__*/React.createElement(Divider, {
    variant: "line"
  })))));
}
window.StayScreen = StayScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StayScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StoryScreen.jsx
try { (() => {
/* Looking Forward — Story screen. Long-form editorial page. */
function StoryScreen({
  onNav
}) {
  const {
    Eyebrow,
    Divider,
    Tag
  } = window.LookingForwardDesignSystem_844b43;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 720,
      margin: '32px auto 0',
      padding: '0 48px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The story"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 56,
      lineHeight: 1.06,
      color: 'var(--ombra-scura)',
      margin: '16px 0 0',
      letterSpacing: '-0.01em'
    }
  }, "Why we left, and what we're", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "building"), " instead")), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1000,
      margin: '40px auto 0',
      padding: '0 48px'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: "the hills below the house",
    arch: true,
    height: 380,
    tone: "salvia"
  })), /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 680,
      margin: '48px auto 0',
      padding: '0 48px',
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.72,
      color: 'var(--ombra)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 600,
      fontSize: 46,
      lineHeight: 0.9,
      float: 'left',
      color: 'var(--terra)',
      margin: '6px 12px 0 0'
    }
  }, "F"), "or years the plan was always \"later.\" Later we'd slow down, later we'd grow something, later we'd live somewhere the mornings were quiet. One winter in Scotland we admitted that later wasn't coming on its own."), /*#__PURE__*/React.createElement("p", null, "So we bought a farmhouse we couldn't quite afford, in a village most maps forget, and started pulling it back into shape. The roof first. Then the water. Then, slowly, the rooms."), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: '36px 0',
      padding: 0,
      borderLeft: 'none',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: 30,
      lineHeight: 1.35,
      color: 'var(--ombra-scura)',
      margin: 0
    }
  }, "\"It's not finished. It may never be finished. That turns out to be the point.\"")), /*#__PURE__*/React.createElement("p", null, "Now there are hens, a garden that feeds us most of the summer, and rooms good enough to share. The name is a small joke and an honest one: we spent a long time looking back at what we should have done. This is us looking forward."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 0
    }
  }, "If you come to stay, you'll get a real place mid-repair \u2014 dust and all \u2014 and a table you're genuinely welcome at."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "salvia"
  }, "Farm"), /*#__PURE__*/React.createElement(Tag, {
    tone: "grano"
  }, "Retreat"), /*#__PURE__*/React.createElement(Tag, {
    tone: "neutral"
  }, "Renovation"))));
}
window.StoryScreen = StoryScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StoryScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * On screen the document renders as a single continuous sheet on a desk
 * background (Google Docs' pageless view): you scroll one tall page card.
 * There is no manual page-splitting — write the whole document as normal
 * flow inside <doc-page> and the browser's print engine paginates it at
 * export.
 *
 * At print the component injects `@page { size: …; margin: 0 }` (which
 * leaves Chrome no margin box to draw its date/URL/page-count header in)
 * and moves the visual margin onto the sheet's own padding, so the printed
 * page has the same inset you see on screen. Standard break-hygiene rules
 * (`break-inside: avoid` on figures, code blocks, images and table rows;
 * `orphans/widows: 3`) are applied so paragraphs and groups split cleanly.
 * On screen and at print, headings default to `text-wrap: balance` and
 * body text (p, li, blockquote, figcaption) to `text-wrap: pretty`, so
 * the document avoids widowed/orphaned words; the defaults have zero
 * specificity, so any text-wrap you declare on those elements wins.
 * The component also marks the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page size="letter" margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 *
 * Attributes:
 *   size    — letter | a4 | legal (default letter)
 *   orientation — portrait (default) | landscape. For documents built to
 *           export, always set it explicitly. landscape swaps the named
 *           size's dimensions (letter landscape prints 11in × 8.5in).
 *   width / height — explicit CSS lengths, override `size` and
 *           `orientation`: the page IS the design's size (a poster
 *           printed at its true dimensions). With both set, the component
 *           also declares the page box as the preview size (a
 *           `meta[name="omelette-fixed-size"]` it injects at runtime,
 *           never overriding one you author), so the in-app preview
 *           scales the whole sheet into view.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the named
 *           paper: content lays out at exactly this size, and the
 *           component scales it to fit the printable area (centered
 *           horizontally, top-aligned), so e.g. a 960px-wide poster lands
 *           on one Letter page. Both must be set; they do not change the
 *           page box — `size`/`orientation` (or `width`/`height`)
 *           still name the paper. For pages WITHOUT running
 *           header/footer slots — the fit box fills the printable area
 *           and does not subtract slot heights.
 *   margin  — printable inset on every page (default 0.75in); margin="0"
 *           makes pages full-bleed (content then owns its own insets)
 *
 * Running header/footer (optional): give an element `slot="header"` or
 * `slot="footer"` and it repeats on every printed page via
 * `position: fixed`. To keep body text from sliding under it, the
 * component prints inside a single-cell table whose <thead>/<tfoot> are
 * spacers sized to the header/footer height — browsers repeat thead/tfoot
 * on every page, so each sheet's content starts below the header and ends
 * above the footer. On screen the header/footer render once at the
 * top/bottom of the sheet.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks: `break-before: page` on an element that must start
 *   a new page (a chapter, an appendix). Add your own kept-together
 *   blocks (callouts, stat tiles, cards) to a `break-inside: avoid`
 *   rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #ece8dd;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 14px rgba(20, 20, 19, 0.12);
      border-radius: 2px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
      } else if (typeof survivor._syncFixedSizeMeta === 'function') {
        // A departed true-size owner hands the page-global preview meta
        // to whatever true-size page remains (or it's removed).
        survivor._syncFixedSizeMeta();
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      this._vars.textContent = ':host{' + fitVars + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      tag.textContent = '@page { size: ' + this.pageWidth + ' ' + this.pageHeight + '; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/website/shell.jsx
try { (() => {
/* Looking Forward — website UI kit shell: nav, footer, and a photo placeholder.
   No real photography was provided, so Photo renders a warm-toned slot in the
   brand palette with an optional arch shape. Swap for real images in production. */

function Wordmark({
  color = 'var(--ombra)',
  size = 26
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 600,
      fontSize: size,
      lineHeight: 1,
      color
    }
  }, "Looking\xA0Forward", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--terra)'
    }
  }, "\xA0\xB7"));
}

/* Warm placeholder standing in for natural-light photography. */
function Photo({
  label = 'photo',
  arch = false,
  height = 260,
  tone = 'grano',
  style = {}
}) {
  const tones = {
    grano: 'linear-gradient(150deg, #E4C489 0%, #D4A257 60%, #C08e45 100%)',
    terra: 'linear-gradient(150deg, #D69670 0%, #C47A50 70%, #a9663f 100%)',
    salvia: 'linear-gradient(150deg, #A3B187 0%, #8A9B6E 70%, #71805a 100%)',
    ombra: 'linear-gradient(150deg, #8a5c40 0%, #7D4F35 70%, #5A3826 100%)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      background: tones[tone],
      borderRadius: arch ? 'var(--radius-arch)' : 'var(--radius-soft)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 14,
      color: 'rgba(255,255,255,0.72)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontWeight: 700,
      ...style
    }
  }, label);
}
function Nav({
  current,
  onNav
}) {
  const items = [['stay', 'Stay'], ['story', 'The story'], ['contact', 'Contact']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '22px 48px',
      maxWidth: 1180,
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('home'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 34
    }
  }, items.map(([key, label]) => /*#__PURE__*/React.createElement("a", {
    key: key,
    onClick: () => onNav(key),
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: current === key ? 'var(--terra)' : 'var(--ombra)',
      borderBottom: current === key ? '2px solid var(--grano)' : '2px solid transparent',
      paddingBottom: 3
    }
  }, label))));
}
function Footer({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ombra-scura)',
      color: 'var(--muro)',
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '64px 48px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    color: "var(--muro)",
    size: 30
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.65,
      maxWidth: 300,
      marginTop: 16,
      color: 'rgba(242,232,214,0.8)'
    }
  }, "A farmhouse in Sessame, Asti \u2014 becoming a B&B, a writers' retreat, and a small farm. Slowly.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--grano)',
      fontWeight: 700,
      marginBottom: 14
    }
  }, "Visit"), ['Stay', 'The story', 'Contact'].map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav(['stay', 'story', 'contact'][i]),
    style: {
      color: 'rgba(242,232,214,0.85)',
      cursor: 'pointer',
      fontSize: 14
    }
  }, l)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--grano)',
      fontWeight: 700,
      marginBottom: 14
    }
  }, "Find us"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.7,
      color: 'rgba(242,232,214,0.85)',
      margin: 0
    }
  }, "Sessame, Asti", /*#__PURE__*/React.createElement("br", null), "Monferrato, Piedmont", /*#__PURE__*/React.createElement("br", null), "Italy"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(242,232,214,0.15)',
      padding: '20px 48px',
      maxWidth: 1180,
      margin: '0 auto',
      fontSize: 12,
      color: 'rgba(242,232,214,0.55)'
    }
  }, "\xA9 2026 Looking Forward \xB7 lookingforward2.it"));
}
Object.assign(window, {
  Wordmark,
  Photo,
  Nav,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TextLink = __ds_scope.TextLink;

})();
