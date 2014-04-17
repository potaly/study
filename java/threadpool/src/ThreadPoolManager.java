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
