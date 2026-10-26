"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { memo } from "react";

/**
 * AirflowLines (Dense Version - Optimized)
 * ----------------------------------------------------------------------
 * Features an increased path loop count, tighter staggered delays,
 * and custom spatial noise mapping to produce a thick, continuous
 * "dense air" effect with optimized rendering performance.
 */

interface AirflowLinesProps {
  top?: string;
  left?: string;
  width?: string;
  height?: string;
  /** Fine-tune rotation on top of the built-in downward fan, in degrees. */
  angle?: number;
  /** Mirror horizontally — use if your vent is on the right blowing left. */
  flipX?: boolean;
  /** Pause animations when modal dialogs are active to free GPU capacity */
  isPaused?: boolean;
  className?: string;
}

export const AirflowLines = memo(function AirflowLines({
  top = "8%",
  left = "5%",
  width = "480px",
  height = "360px",
  angle = 0,
  flipX = false,
  isPaused = false,
  className,
}: AirflowLinesProps) {
  return (
    <div
      className={cn("absolute pointer-events-none", className)}
      style={{
        top,
        left,
        width,
        height,
        transform: `rotate(${angle}deg) scaleX(${flipX ? -1 : 1})`,
        transformOrigin: "0% 0%",
        WebkitMaskImage: "linear-gradient(115deg, black 0%, black 55%, transparent 95%)",
        maskImage: "linear-gradient(115deg, black 0%, black 55%, transparent 95%)",
        contain: "layout paint style",
        willChange: "transform",
      }}
    >
      <SVG isPaused={isPaused} />
    </div>
  );
});

// Shorter dash with an overlapping trail gives a rapid fluid appearance
const pathVariants = {
  initial: { strokeDashoffset: 800, strokeDasharray: "30 800" },
  animate: {
    strokeDashoffset: 0,
    strokeDasharray: "25 600",
    opacity: [0, 0.85, 0.85, 0],
  },
};

const paths = [
  "M719.974 450C719.974 450 765.293 459.346 789.305 476.402C813.318 493.459 825.526 487.104 865.093 495.586C904.659 504.068 908.361 510.231 943.918 523.51C979.475 536.789 963.13 535.277 1009.79 547.428C1056.45 559.579 1062.34 555.797 1089.82 568.96C1117.31 582.124 1133.96 582.816 1159.12 592.861C1184.28 602.906 1182.84 603.359 1233.48 614.514C1284.12 625.67 1254.63 632.207 1306.33 644.465C1358.04 656.723 1359.27 656.568 1378.67 670.21C1398.07 683.852 1406.16 676.466 1456.34 692.827C1506.51 709.188 1497.73 708.471 1527.54 715.212",
  "M720 450C720 450 743.97 465.061 754.884 490.648C765.798 516.235 781.032 501.34 791.376 525.115C801.72 548.889 808.417 538.333 829.306 564.807C850.195 591.281 852.336 582.531 865.086 601.843C877.835 621.155 874.512 621.773 902.383 643.857C930.255 665.94 921.885 655.976 938.025 681.74C954.164 707.505 959.384 709.719 977.273 720.525C995.162 731.33 994.233 731.096 1015.92 757.676C1037.61 784.257 1025.74 768.848 1047.82 795.343C1069.91 821.837 1065.95 815.45 1085.93 834.73C1105.91 854.009 1110.53 848.089 1124.97 869.759C1139.4 891.428 1140.57 881.585 1158.53 911.499C1176.5 941.414 1184.96 933.829 1194.53 948.792C1204.09 963.755 1221.35 973.711 1232.08 986.224C1242.8 998.738 1257.34 1015.61 1269.99 1026.53C1282.63 1037.45 1293.81 1040.91 1307.21 1064.56",
  "M720 450C720 450 737.033 492.46 757.251 515.772C777.468 539.084 768.146 548.687 785.517 570.846C802.887 593.005 814.782 609.698 824.589 634.112C834.395 658.525 838.791 656.702 855.55 695.611C872.31 734.519 875.197 724.854 890.204 764.253C905.21 803.653 899.844 790.872 919.927 820.763C940.01 850.654 939.071 862.583 954.382 886.946C969.693 911.309 968.683 909.254 993.997 945.221C1019.31 981.187 1006.67 964.436 1023.49 1007.61C1040.32 1050.79 1046.15 1038.25 1059.01 1073.05C1071.88 1107.86 1081.39 1096.19 1089.45 1131.96C1097.51 1167.73 1106.52 1162.12 1125.77 1196.89",
  "M720 450C720 450 730.384 481.55 739.215 507.557C748.047 533.564 751.618 537.619 766.222 562.033C780.825 586.447 774.187 582.307 787.606 618.195C801.025 654.082 793.116 653.536 809.138 678.315C825.16 703.095 815.485 717.073 829.898 735.518C844.311 753.964 845.351 773.196 852.197 786.599C859.042 800.001 862.876 805.65 872.809 845.974C882.742 886.297 885.179 874.677 894.963 903.246C904.747 931.816 911.787 924.243 921.827 961.809C931.867 999.374 927.557 998.784 940.377 1013.59C953.197 1028.4 948.555 1055.77 966.147 1070.54C983.739 1085.31 975.539 1105.69 988.65 1125.69C1001.76 1145.69 1001.82 1141.59 1007.54 1184.37C1013.27 1227.15 1018.98 1198.8 1029.67 1241.58",
  "M720 450C720 450 722.468 499.363 726.104 520.449C729.739 541.535 730.644 550.025 738.836 589.07C747.028 628.115 743.766 639.319 746.146 659.812C748.526 680.306 754.006 693.598 757.006 732.469C760.007 771.34 760.322 765.244 763.893 805.195C767.465 845.146 769.92 822.227 773.398 868.469C776.875 914.71 776.207 901.365 778.233 940.19C780.259 979.015 782.53 990.477 787.977 1010.39C793.424 1030.3 791.788 1060.01 797.243 1082.24C802.698 1104.47 801.758 1130.29 808.181 1149.64C814.604 1168.99 813.135 1171.5 818.026 1225.28C822.918 1279.06 820.269 1267.92 822.905 1293.75",
  "M720 450C720 450 723.524 466.673 728.513 497.319C733.503 527.964 731.894 519.823 740.001 542.706C748.108 565.589 744.225 560.598 748.996 588.365C753.766 616.131 756.585 602.096 761.881 636.194C767.178 670.293 768.155 649.089 771.853 679.845C775.551 710.6 775.965 703.738 781.753 724.555C787.54 745.372 787.248 758.418 791.422 773.79C795.596 789.162 798.173 807.631 804.056 819.914C809.938 832.197 806.864 843.07 811.518 865.275C816.171 887.48 816.551 892.1 822.737 912.643C828.922 933.185 830.255 942.089 833.153 956.603C836.052 971.117 839.475 969.242 846.83 1003.98C854.185 1038.71 850.193 1028.86 854.119 1048.67C858.045 1068.48 857.963 1074.39 863.202 1094.94C868.44 1115.49 867.891 1108.03 874.497 1138.67C881.102 1169.31 880.502 1170.72 887.307 1186.56C894.111 1202.4 890.388 1209.75 896.507 1231.25C902.627 1252.76 902.54 1245.39 906.742 1279.23",
];

const colors = [
  "#0284C7", // Deep Sky Blue (dense outer boundary)
  "#0EA5E9", // Mid Sky Blue
  "#38BDF8", // True Sky Blue
  "#7DD3FC", // Light Sky Blue
  "#22D3EE", // Vibrant Ice Cyan (bright but saturated)
  "#67E8F9", // Lighter Ice Cyan (replaces the final flat white)
];

const SVG = memo(function SVG({ isPaused }: { isPaused: boolean }) {
  return (
    <motion.svg
      viewBox='660 390 760 600'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      initial={{ opacity: 0 }}
      animate={{ opacity: isPaused ? 0.3 : 1 }}
      transition={{ duration: 0.4 }}
      className='absolute inset-0 w-full h-full'
    >
      <defs>
        <filter id='airflow-soften' x='-20%' y='-20%' width='140%' height='140%'>
          <feGaussianBlur stdDeviation='1.5' />
        </filter>
      </defs>
      <g filter='url(#airflow-soften)'>
        {[0, 1, 2, 3, 4, 5].map((copy) =>
          paths.map((path, idx) => {
            const translateX = ((copy * 3 + idx * 2) % 16) - 8;
            const translateY = ((copy * 2 + idx * 3) % 12) - 6;

            return (
              <motion.path
                key={`airflow-${copy}-${idx}`}
                d={path}
                stroke={colors[idx]}
                strokeWidth='2.5'
                strokeLinecap='round'
                variants={pathVariants}
                initial='initial'
                animate={isPaused ? "initial" : "animate"}
                transform={`translate(${translateX}, ${translateY})`}
                transition={{
                  duration: 2.8 + idx * 0.4,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: (copy * paths.length + idx) * 0.18,
                  repeatDelay: 0.15,
                }}
              />
            );
          }),
        )}

        {/* --- Background Volumetric Layer --- */}
        <g transform='translate(4, -15)' opacity='0.75'>
          {paths.slice(1, 5).map((path, idx) => (
            <motion.path
              key={`extra-a-${idx}`}
              d={path}
              stroke={colors[idx + 1]}
              strokeWidth='2'
              strokeLinecap='round'
              variants={pathVariants}
              initial='initial'
              animate={isPaused ? "initial" : "animate"}
              transition={{
                duration: 3.2,
                ease: "linear",
                repeat: Infinity,
                delay: 0.6 + idx * 0.3,
                repeatDelay: 0.2,
              }}
            />
          ))}
        </g>
      </g>
    </motion.svg>
  );
});
