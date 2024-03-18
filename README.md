# Page Transitions Framer motion
![image](https://github.com/amadich/PageTransitions_Framer_Motion/assets/74735976/ddcf3b94-ae54-49df-b548-bbe40733abfe)

# Make your children_Pages inside AnimatePresence

```tsx
import { AnimatePresence } from "framer-motion";
```

```tsx
// layout.tsx 
<body className={inter.className}>

        <AnimatePresence>
            {children}
        </AnimatePresence>
        
      </body>
```

```tsx
import { motion } from "framer-motion";
```

```
<motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.01 } }}
>
      <NavBar />
      <Aside image={Banner} />
</motion.div>
```

# Other Opacity

```tsx
<motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 , transition: { duration: 0.1 }  }}
    >
      {/* ... */}
</motion.dev>
```
