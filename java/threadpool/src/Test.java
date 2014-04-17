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
