#线程池原理

##1.线程队列

用于处理等待处理的线程

	/**
	 * 线程队列
	 */
	private List<Runnable> threadQueue = new ArrayList<Runnable>();

##2.线程处理器

用于调用Runnable的run方法，注意哦，是直接调用run方法；

	/**
	 * 线程执行器
	 * 
	 * @author yuan
	 * 
	 */
	private class ThreadWorker implements Runnable {

		private final Logger log = Logger.getLogger(ThreadWorker.class
				.getName());

		/*
		 * (non-Javadoc)
		 * 
		 * @see java.lang.Runnable#run()
		 */
		public void run() {
			while (true) {
				try {
					String name = Thread.currentThread().getName();
					// 从线程队列获取要执行的线程
					// ThreadQueue.get()已经做过同步处理
					Runnable run = getRunnable();
					if (null != run) {
						// 不启动新线程 直接执行线程方法
						log.info(name + " [run] " + new Date());
						run.run();
					} else {
						// 取不到线程则休眠500毫秒
						log.info(name + " [wait] " + new Date());
						Thread.sleep(500);
					}
					if (isStop()) {
						log.info(name + " [stop] " + new Date());
						return;
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
	}

##3.线程池控制器

用于启动停止线程池，创建线程池线程处理器；

	/**
	 * 启动线程池
	 */
	public void start() {
		if (this.size > 0 && this.stop) {
			this.stop = false;
			for (int i = 0; i < this.size; i++) {
				new Thread(new ThreadWorker()).start();
			}
		}
	}
	
#简单模拟(简单测试，类就没有放进包内。)

	import java.util.ArrayList;
	import java.util.Date;
	import java.util.List;
	import java.util.logging.Logger;

	/**
	 * 线程管理器
	 * 
	 * @author yuan
	 * 
	 */
	public class ThreadPoolManager {

		/**
		 * 线程队列
		 */
		private List<Runnable> threadQueue = new ArrayList<Runnable>();

		/**
		 * 线程池大小
		 */
		private int size;

		/**
		 * 是否结束线程池
		 */
		private boolean stop = true;

		public ThreadPoolManager(int size) {
			this.size = size;
		}

		public boolean isStop() {
			return stop && threadQueue.isEmpty();
		}

		/**
		 * 获取队列中的排队线程
		 * 
		 * @return
		 */
		public Runnable getRunnable() {
			synchronized (threadQueue) {
				if (threadQueue.isEmpty()) {
					return null;
				}
				return threadQueue.remove(0);
			}
		}

		/**
		 * 新增排队线程
		 * 
		 * @param runnable
		 */
		public void add(Runnable runnable) {
			synchronized (threadQueue) {
				threadQueue.add(runnable);
			}
		}

		/**
		 * 启动线程池
		 */
		public void start() {
			if (this.size > 0 && this.stop) {
				this.stop = false;
				for (int i = 0; i < this.size; i++) {
					new Thread(new ThreadWorker()).start();
				}
			}
		}

		/**
		 * 停止线程池
		 */
		public void stop() {
			this.stop = true;
		}

		/**
		 * 线程执行器
		 * 
		 * @author yuan
		 * 
		 */
		private class ThreadWorker implements Runnable {

			private final Logger log = Logger.getLogger(ThreadWorker.class
					.getName());

			/*
			 * (non-Javadoc)
			 * 
			 * @see java.lang.Runnable#run()
			 */
			public void run() {
				while (true) {
					try {
						String name = Thread.currentThread().getName();
						// 从线程队列获取要执行的线程
						// ThreadQueue.get()已经做过同步处理
						Runnable run = getRunnable();
						if (null != run) {
							// 不启动新线程 直接执行线程方法
							log.info(name + " [run] " + new Date());
							run.run();
						} else {
							// 取不到线程则休眠500毫秒
							log.info(name + " [wait] " + new Date());
							Thread.sleep(500);
						}
						if (isStop()) {
							log.info(name + " [stop] " + new Date());
							return;
						}
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
			}
		}

	}
	
#测试代码

	public class Test {

		public static void main(String[] args) throws Exception {
			ThreadPoolManager m = new ThreadPoolManager(2);

			// 执行1个线程
			m.add(new Runnable() {
				public void run() {
					try {
						Thread.sleep(1);
						System.out.println(Thread.currentThread().getName()
								+ " run 1");
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			});
			m.start();
			Thread.sleep(300);
			// 执行2个线程
			m.add(new Runnable() {
				public void run() {
					try {
						Thread.sleep(1);
						System.out.println(Thread.currentThread().getName()
								+ " run 2");
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			});
			m.add(new Runnable() {
				public void run() {
					try {
						Thread.sleep(1);
						System.out.println(Thread.currentThread().getName()
								+ " run 3");
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			});
			Thread.sleep(1000);
			// 执行5个线程 （run 5）占用一个线程10毫秒
			m.add(new Runnable() {
				public void run() {
					try {
						Thread.sleep(1);
						System.out.println(Thread.currentThread().getName()
								+ " run 4");
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			});
			m.add(new Runnable() {
				public void run() {
					try {
						Thread.sleep(10);
						System.out.println(Thread.currentThread().getName()
								+ " run 5");
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			});
			m.add(new Runnable() {
				public void run() {
					try {
						Thread.sleep(1);
						System.out.println(Thread.currentThread().getName()
								+ " run 6");
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			});
			m.add(new Runnable() {
				public void run() {
					try {
						Thread.sleep(1);
						System.out.println(Thread.currentThread().getName()
								+ " run 7");
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			});
			m.add(new Runnable() {
				public void run() {
					try {
						Thread.sleep(1);
						System.out.println(Thread.currentThread().getName()
								+ " run 8");
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			});
			m.stop();

		}

	}

#执行结果

	四月 18, 2014 1:32:19 上午 ThreadPoolManager$ThreadWorker run
	信息: Thread-2 [wait] Fri Apr 18 01:32:19 CST 2014
	四月 18, 2014 1:32:19 上午 ThreadPoolManager$ThreadWorker run
	信息: Thread-1 [run] Fri Apr 18 01:32:19 CST 2014
	Thread-1 run 1
	四月 18, 2014 1:32:19 上午 ThreadPoolManager$ThreadWorker run
	信息: Thread-1 [wait] Fri Apr 18 01:32:19 CST 2014
	四月 18, 2014 1:32:20 上午 ThreadPoolManager$ThreadWorker run
	信息: Thread-2 [run] Fri Apr 18 01:32:20 CST 2014
	Thread-2 run 2
	四月 18, 2014 1:32:20 上午 ThreadPoolManager$ThreadWorker run
	信息: Thread-1 [run] Fri Apr 18 01:32:20 CST 2014
	Thread-1 run 3
	四月 18, 2014 1:32:20 上午 ThreadPoolManager$ThreadWorker run
	信息: Thread-2 [wait] Fri Apr 18 01:32:20 CST 2014
	四月 18, 2014 1:32:20 上午 ThreadPoolManager$ThreadWorker run
	信息: Thread-1 [wait] Fri Apr 18 01:32:20 CST 2014
	四月 18, 2014 1:32:20 上午 ThreadPoolManager$ThreadWorker run
	信息: Thread-2 [wait] Fri Apr 18 01:32:20 CST 2014
	四月 18, 2014 1:32:20 上午 ThreadPoolManager$ThreadWorker run
	信息: Thread-1 [wait] Fri Apr 18 01:32:20 CST 2014
	四月 18, 2014 1:32:21 上午 ThreadPoolManager$ThreadWorker run
	信息: Thread-2 [run] Fri Apr 18 01:32:21 CST 2014
	Thread-2 run 4
	四月 18, 2014 1:32:21 上午 ThreadPoolManager$ThreadWorker run
	信息: Thread-1 [run] Fri Apr 18 01:32:21 CST 2014
	四月 18, 2014 1:32:21 上午 ThreadPoolManager$ThreadWorker run
	信息: Thread-2 [run] Fri Apr 18 01:32:21 CST 2014
	Thread-2 run 6
	四月 18, 2014 1:32:21 上午 ThreadPoolManager$ThreadWorker run
	信息: Thread-2 [run] Fri Apr 18 01:32:21 CST 2014
	Thread-2 run 7
	四月 18, 2014 1:32:21 上午 ThreadPoolManager$ThreadWorker run
	信息: Thread-2 [run] Fri Apr 18 01:32:21 CST 2014
	Thread-2 run 8
	四月 18, 2014 1:32:21 上午 ThreadPoolManager$ThreadWorker run
	信息: Thread-2 [stop] Fri Apr 18 01:32:21 CST 2014
	Thread-1 run 5
	四月 18, 2014 1:32:21 上午 ThreadPoolManager$ThreadWorker run
	信息: Thread-1 [stop] Fri Apr 18 01:32:21 CST 2014

